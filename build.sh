rm -r build/
rm -r app
mkdir app
yarn run build
mv build/ app/
