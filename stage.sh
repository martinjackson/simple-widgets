#!/bin/bash

if [ -z "$(git status --untracked-files=no --porcelain)" ]; then
  # Working directory clean excluding untracked files
else
  # Uncommitted changes in tracked files
  git commit --all  --allow-empty -q -m staged-for-production
fi

