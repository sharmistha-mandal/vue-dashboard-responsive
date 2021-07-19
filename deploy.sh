#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/sharmistha-mandal/vue-dashboard-responsive.git master:gh-pages

cd -