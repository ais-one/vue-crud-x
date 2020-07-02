#!/bin/bash

# $0. The name of script itself.
# $$ Process id of current shell.
# $* Values of all the arguments. ...
# $# Total number of arguments passed to script.
# $@ Values of all the arguments.
# $? Exit status id of last command.

# $1 relative path to project folder from vue-crud-x
# $2 environment

echo "IMPORTANT! Run this in the vue-crud-x folder"

if [ ! $1 ]; then # eg. example-web
    echo "Missing path to project. Set at package.json" && read && exit
fi
if [ ! $2 ]; then # eg. uat
    echo "Missing project environment. Set at package.json" && read && exit
fi

baseDir=`pwd`
echo "NOTE: gsutil.cmd in windows git bash. If cannot find command in Windows, it could be space in path (.../Google Cloud/...) to gsutil."
echo "Fix by renaming with no space, also edit the PATH env, restart the command console."
cd $1
webBaseDir=`pwd`
OIFS=$IFS;
while IFS=, read -r site gs; do
  # build
  cd $site
  echo "building - site $site ($2)"
  read -p "install packages (y/n)?" yn < /dev/tty
  if [[ $yn == "Y" || $yn == "y" ]]; then
    npm i
  fi
  read -p "build (y/n)?" yn < /dev/tty
  if [[ $yn == "Y" || $yn == "y" ]]; then
    npm run build-$2
  fi
  cd $webBaseDir
  # deploy
  read -p "deploy gs $site (y/n)?" yn < /dev/tty
  if [[ $yn == "Y" || $yn == "y" ]]; then
    gcloud auth activate-service-account `cat config/secret/$2.gcp.txt` --key-file=config/secret/$2.gcp.json
    gsutil.cmd -m rsync -R $webBaseDir/$site/dist $gs
    # gsutil.cmd ls $gs
  fi
  # mkdir -p $baseDir/build/$1/$site/dist
  # cp -r $site/dist $baseDir/build/$1/$site
  echo "Site built"
done < config/$2.web.csv
IFS=$OIFS
cd $baseDir
# clear cloudflare cache
cat <<-EOF
# Sample command to clear cloudflare cache 
curl -X POST "https://api.cloudflare.com/client/v4/zones/YOUR-ZONE-ID/purge_cache" \
  -H "X-Auth-Email: YOUR-CLOUDFLARE-EMAIL" \
  -H "X-Auth-Key: YOUR-GLOBAL-API-KEY" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'
# CircleCI TBD - [![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://circleci.com/gh/circleci/circleci-docs)
EOF

echo "Done... press enter to exit"
read # pause exit in windows