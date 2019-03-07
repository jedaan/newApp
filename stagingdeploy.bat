call gulp build --env=development
cd dist
call gcloud app deploy --project "wixlabs-comments-dev" -v %1
cd..
