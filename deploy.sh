git clone -b v3 https://github.com/GoogleChrome/workbox.git --depth=1 ./workbox/
cd ./workbox/
npm install
gulp docs:build
rm -rf ../public/reference-docs/
mv ./docs/ ../public/reference-docs/
cd ..
rm -rf ./workbox/
firebase deploy
