const fs = require('fs');
const glob = require('glob');

const wnImages = glob.sync('src/content/whats-new/**/*.*', {
  ignore: ['**/.gitkeep', '**/*.md'],
});
const wnImageDirs = glob.sync('src/content/whats-new/**/images', {});

// images not in expected image folders:
// 'src/components/backend.webp',
// 'src/components/curlyAndDots.webp',
// 'src/components/curlyAndDotsDM.webp',
// 'src/components/devops.webp',
// 'src/components/frontend.webp',

// these i think can be remove ^

// 'src/content/docs/apm/agents/net-agent/configuration/images/dotnetlogo.webp',
// 'src/content/docs/new-relic-solutions/transition-user-menu.webp'

// these just seem incorrect ^

// get all images in whats new image dirs
// then strip off the image file name to construct the new path

// src/content/whats-new/2024/02/logs-live-archives-retention.webp is not in an image folder ( but also not used?)

// wnImages.forEach((image) => {
//   const imageName = image.split('/images/');
//   console.log('Successfully renamed ', image, ` static/images/${imageName[1]}`);
//   if (imageName[1] !== undefined) {
//     fs.rename(image, `static/images/${imageName[1]}`, function (err) {
//       if (err) throw err;
//     });
//   } else {
//     console.log('❌', image);
//   }
// });

// delete image directories and all contents (.gitignore's)
// src/content/whats-new/2024/05/images/whats-new-05-08-sessiontraces.md
// src/content/whats-new/2024/07/images/whats-new-07-02-apmk8s.md
// there are two whats new posts in image directories we will need to pull out and rerun this

wnImageDirs.forEach((dir) => {
  fs.rmSync(dir, { recursive: true, force: true });
});
