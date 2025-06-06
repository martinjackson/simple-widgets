#!/bin/dash

npm install --save-dev jest @testing-library/react @testing-library/jest-dom
npm install --save-dev jest @babel/core @babel/preset-env @babel/preset-react babel-jest

npm install -D react react-dom

npm install --save-dev @testing-library/dom

# over 7 years old -- too old for jest
# npm install --save-dev jest-svg-transformer
npm remove jest-svg-transformer
