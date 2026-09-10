#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
# shellcheck source=lib/posts_fixture_config.sh
source "${ROOT_DIR}/test/lib/posts_fixture_config.sh"

tmp_dir="$(mktemp -d)"
tmp_site="${tmp_dir}/site"

cleanup() {
  rm -rf "${tmp_dir}"
}
trap cleanup EXIT

cat >"${tmp_dir}/override.yml" <<'YAML'
giscus:
  repo: alshedivat/al-folio
  repo_id: R_kgDOExample
  category: Comments
  category_id: DIC_kwDOExample
YAML

prepare_fixture_post_excludes "${tmp_dir}" '*giscus-comments*' '*disqus-comments*'

bundle exec jekyll build --config "${tmp_dir}/config.yml,${tmp_dir}/override.yml" -d "${tmp_site}" >/dev/null

giscus_page="${tmp_site}/blog/2022/giscus-comments/index.html"
disqus_page="${tmp_site}/blog/2015/disqus-comments/index.html"

if [[ ! -f "${giscus_page}" ]]; then
  echo "missing expected giscus fixture page: ${giscus_page}" >&2
  exit 1
fi
if [[ ! -f "${disqus_page}" ]]; then
  echo "missing expected disqus fixture page: ${disqus_page}" >&2
  exit 1
fi

grep -q 'https://giscus.app/client.js' "${giscus_page}"
if grep -q 'giscus comments misconfigured' "${giscus_page}"; then
  echo "unexpected giscus misconfiguration warning in ${giscus_page}" >&2
  exit 1
fi

grep -q 'id="disqus_thread"' "${disqus_page}"
grep -q '.disqus.com/embed.js' "${disqus_page}"

echo "comments integration checks passed"
