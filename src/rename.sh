#!/bin/bash

# Find all .jsx files and rename them to .js


# for file in $(git ls-files '*.jsx'); do

cd ~/projects/simple-widgets/src/

for file in $(find . -name '*.jsx'); do
  # Get the base name without the extension
  base_name=$(basename "$file" .jsx)

  # Get the directory name
  dir_name=$(dirname "$file")

  # Construct the new file name with .js extension
  new_file="$dir_name/$base_name.js"

  # Use git mv to rename the file
  git mv "$file" "$new_file"
done

# Commit the changes
echo git commit -m "Rename all .jsx files to .js"

