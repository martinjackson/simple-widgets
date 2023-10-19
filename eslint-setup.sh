#!/bin/bash

# ◆	Black Diamond	&#9670;	&#x25C6;

POINT='◆'
RED='\033[0;31m'
GREEN='\033[1;32m'
NC='\033[0m' # No Color

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

echo -e "${GREEN}${POINT}" 'npm install dev dependancies: eslint and esling plugins' "${NC}"

npm install --legacy-peer-deps -D eslint  eslint-plugin-react  eslint-plugin-react-hooks  eslint-plugin-jest

# eslint-plugin-tailwindcss eslint-plugin-import eslint-plugin-jsx-a11y

echo -e "${GREEN}${POINT}" 'copying over the eslint config files' "${NC}"

cp ${SCRIPT_DIR}/.eslintrc.js        .
cp ${SCRIPT_DIR}/.markdownlint.json  .
cp ${SCRIPT_DIR}/tailwind.config.js  .
cp ${SCRIPT_DIR}/babel.config.json   .
cp ${SCRIPT_DIR}/graphql.config.json .


