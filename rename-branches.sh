#!/bin/bash

git checkout main
git branch -m main after-split
git checkout before-split
git branch -m before-split main

echo 'renaming braches: all done'

