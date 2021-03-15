#!/bin/sh

set -o nounset
# Exit script if a statement returns a non-true return value.
set -o errexit
# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

TMP_DIRECTORY="/tmp/workspace"
FRONTEND="${TMP_DIRECTORY}/frontend"
BUILD_DIR="${FRONTEND}/build"

cd $FRONTEND && npm install && npm run build
