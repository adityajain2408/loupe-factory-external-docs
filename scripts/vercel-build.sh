#!/bin/sh

set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
PROJECT_ROOT=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)

cd "$PROJECT_ROOT"

ENABLE_GIT_PLUGINS=true pip install --break-system-packages -r requirements.txt
ENABLE_GIT_PLUGINS=true mkdocs build
