# Developer Notes

## Release

Format prior to committing:

```bash
npm run format:write
ng lint
ng test
```

Prior to release, increment version in `projects/ngx-avatar-persona/package.json`.

```bash
cat README.md > projects/ngx-avatar-persona/README.md
versioned --source projects/ngx-avatar-persona/package.json --patch
NPM_PKG_VER=(`cat ./projects/ngx-avatar-persona/package.json | jq -r .version`)
git add .
git commit -m "release v${NPM_PKG_VER}"
```

Then, run the following commands to tag and release:

```bash
npm run package
NPM_PKG_VER=(`cat ./projects/ngx-avatar-persona/package.json | jq -r .version`)
git tag -a v${NPM_PKG_VER} -m "v${NPM_PKG_VER}"
git push
git push --tags
```
