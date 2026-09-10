#!/usr/bin/env bash
# Shared helpers for integration tests on this personalized site.
#
# The public site excludes `_posts/` (no blog). Several upstream integration
# fixtures still live under `_posts/`, so tests that need them must temporarily
# re-enable only those fixtures — other sample posts reference assets that are
# not shipped here and would break the build.

# Writes "${1}/config.yml" and appends an `exclude:` block to "${1}/override.yml"
# that keeps the site excludes (minus `_posts/`) and hides every post that does
# not match one of the remaining glob arguments (matched against basename).
#
# Caller should create "${1}/override.yml" first with any other overrides, then
# call this so the exclude block is appended last (later config wins for arrays).
prepare_fixture_post_excludes() {
  local tmp_dir="$1"
  shift

  if [[ ! -f "${tmp_dir}/override.yml" ]]; then
    : >"${tmp_dir}/override.yml"
  fi

  grep -v -E '^[[:space:]]*-[[:space:]]*_posts/?[[:space:]]*$' _config.yml >"${tmp_dir}/config.yml"

  {
    echo "exclude:"
    awk '
      /^exclude:[[:space:]]*$/ {in_ex=1; next}
      in_ex && /^[^[:space:]#]/ {in_ex=0}
      in_ex && /^[[:space:]]*-[[:space:]]*_posts\/?[[:space:]]*$/ {next}
      in_ex && /^[[:space:]]*-/ {print}
    ' _config.yml

    local post
    while IFS= read -r post; do
      local base keep=0 pattern
      base="$(basename "${post}")"
      for pattern in "$@"; do
        # shellcheck disable=SC2254
        case "${base}" in
          ${pattern}) keep=1; break ;;
        esac
      done
      if [[ "${keep}" -eq 0 ]]; then
        echo "  - ${post}"
      fi
    done < <(find _posts -type f \( -name '*.md' -o -name '*.markdown' \) | sort)
  } >>"${tmp_dir}/override.yml"
}
