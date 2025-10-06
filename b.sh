#!/bin/bash

BUILD=$(npm run build | grep '[0-9] pack$' | awk '{ print $2 }')
echo "Build ${BUILD} of simple-widgets"

# Build simple-widgets and create a tgz file -- capture the version in the output
VERSION=$(echo "$BUILD" | grep -oP '[\d+\.]*')
echo "Version is ${VERSION}"

echo 'copy to edit-node-auth for testing...'
cp simple-widgets-${VERSION}.tgz /home/mjackson/projects/edit-node-auth/client/

cd /home/mjackson/projects/edit-node-auth/client/
npm install --save ./simple-widgets-${VERSION}.tgz

# rebuild edit-node-auth client
npm run build
