#!/bin/sh

## It will show error on the line
set -e

set -o nounset
# Exit script if a statement returns a non-true return value.
set -o errexit
# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

TMP_DIRECTORY="/tmp"
mkdir -p $TMP_DIRECTORY
cp -r ./ $TMP_DIRECTORY
cd $TMP_DIRECTORY

echo $TMP_DIRECTORY

## Show the env
printenv

## Output the file before running the script
ls -al src/

npm install && npm run build
