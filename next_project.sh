#!/bin/bash
set -e # exit on error instead of trying to continue

PROJECT_FOLDER="$1"
BRANCH_NAME="$1"
echo "Project Folder: $PROJECT_FOLDER"
echo "Branch Name: $BRANCH_NAME"

# git checkout -b $BRANCH_NAME
mkdir $PROJECT_FOLDER
cp -r _project_starter_/ $PROJECT_FOLDER
git add .
git commit -m 'Add project starter files'
git push --set-upstream origin $BRANCH_NAME
code $PROJECT_FOLDER