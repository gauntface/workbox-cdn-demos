echo "Cloning workbox repo"
echo ""
echo ""
git clone -b v3 https://github.com/GoogleChrome/workbox.git --depth=1 ./workbox/

echo ""
echo ""
echo "cd in workbox"
echo ""
echo ""
cd ./workbox/

echo ""
echo ""
echo "npm install"
echo ""
echo ""
npm install

echo ""
echo ""
echo "Build Docs"
echo ""
echo ""
gulp docs:build

echo ""
echo ""
echo "cd out of workbox"
echo ""
echo ""
cd ..

echo ""
echo ""
echo "Remove public/reference-docs/"
echo ""
echo ""
rm -rf ./public/reference-docs/

echo ""
echo ""
echo "pwd && ls -l"
echo ""
echo ""
pwd
ls -l

echo ""
echo ""
echo "mv ./workbox/docs/ ./public/reference-docs/"
echo ""
echo ""
mv ./workbox/docs/ ./public/reference-docs/

echo ""
echo ""
echo "rm -rf ./workbox/"
echo ""
echo ""
rm -rf ./workbox/

echo ""
echo ""
echo "Update modules.json"
echo ""
echo ""
node ./update-modules.js

echo ""
echo ""
echo "Deploy to Firebase"
echo ""
echo ""
if [ -z "$FIREBASE_TOKEN" ]; then
  firebase deploy
else
  firebase deploy --token $FIREBASE_TOKEN
fi
