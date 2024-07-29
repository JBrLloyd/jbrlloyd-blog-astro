# !/bin/bash

if [ "$CF_PAGES_BRANCH" == "production" ]; then
  HIDE_DRAFTS=true pnpm run build

else
  HIDE_DRAFTS=false pnpm run build
fi