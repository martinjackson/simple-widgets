#!/bin/bash

# git add lib/*.css
# git commit -am 'added lib/*.css'

# npm run pub

npm run build

echo "have your browser and phone ready..."
npm login
npx release-it --no-git.requireCleanWorkingDir --npm.skipChecks
