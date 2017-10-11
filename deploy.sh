git clone -b v3 https://github.com/GoogleChrome/workbox.git --depth=1 ./workbox/
cd ./workbox/
npm install
gulp docs:build
rm -rf ../public/reference-docs/
mv ./docs/ ../public/reference-docs/
cd ..
rm -rf ./workbox/
node ./update-modules.js
if [ -z "$FIREBASE_TOKEN" ]; then
  firebase deploy
else
  firebase deploy --token $FIREBASE_TOKEN
fi
