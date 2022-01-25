

# How to create a project to publish on our campus' GitLab

## Things to notice:
   - @whatever (Scope Name) must be exactly the same case in
      - the url on ncsvmgitlab
      - @whatever in the package name
      - **NEW npm rules -- must be all lowercase**

   - PROJECT ID can be found under the title on the Project Overview page

   - A Private Token must be generated and placed in the .env file PRIVATE_TOKEN=
      - Login to ncsvmGitLab.  Go to your account's UserSetting -> Access Tokens
         1. Create a personal access token with the following permissions: api, read_api, read_repository, write_repository
         2. Write the token and store it in a safe place -- you will never view it again on the Setting Page
         3. Also keep the name you gave it, that is how this token will be listed on the bottom of the Access Tokens page.
         4. Paste your token string into a .env file aka. PRIVATE_TOKEN=asdasdasdasdasdasda

[References](https://ncsvmgitlab.fda.gov/help/user/packages/npm_registry/index.md#authenticate-to-the-package-registry)

### package.json

```
{
  "name": "@nctr/test_package",
  "version": "5.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "npm start",
    "version": "echo  $npm_package_version",
    "getName": "echo  $npm_package_name"
  },
  "repository": {
    "type": "https",
    "url": "https://ncsvmgitlab.fda.gov/nctr/test_package.git"
  },
   "publishConfig": {
    "@nctr:registry": "https://ncsvmgitlab.fda.gov/api/v4/projects/328/packages/npm/"
  },
  "author": "Martin A. Jackson",
  "license": "ISC"
}

```

### How to publish
```
#!/bin/zsh

. ./.env

TOKEN=$PRIVATE_TOKEN
PROJECT_ID=336

if [[ ! -a .npmrc ]]; then
    # reset ~/.npmrc settings
    echo "strict-ssl=false" >~/.npmrc

    npm config set @nctr:registry https://ncsvmgitlab.fda.gov/api/v4/projects/${PROJECT_ID}/packages/npm/
    npm config set "//ncsvmgitlab.fda.gov/api/v4/projects/${PROJECT_ID}/packages/npm/:_authToken" "$TOKEN"

    cp ~/.npmrc .
fi

// update the patch level of the version number and git commit
npm version patch -m "release %s"
git push

npm publish


```

