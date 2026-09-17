#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

if ! command -v flyctl &>/dev/null; then
  echo "flyctl not found. Install: curl -L https://fly.io/install.sh | sh" >&2
  exit 1
fi

if [ ! -f fly.toml ]; then
  echo "fly.toml missing. Run 'flyctl launch --no-deploy' first." >&2
  exit 1
fi

flyctl deploy --local-only "$@"
