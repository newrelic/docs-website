echo "Running i18n utility"
yarn i18n-utility delete-orphans
echo "Finished running 18n utility"

./scripts/imagesSubdir.sh cp root
./scripts/imagesSubdir.sh cp i18n
./scripts/imagesSubdir.sh rm root
./scripts/imagesSubdir.sh rm i18n

echo "Fixing filenames"
# node scripts/changeImgFileName.js
echo "Finished fixing filenames"

echo "Running image codemod"
# node scripts/convertImages.js
echo "Finished image codemod"


echo "Finished image codemod. Use 'yarn start' or 'yarn develop' to proceed."

