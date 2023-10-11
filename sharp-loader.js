const sharp = require('sharp');

module.exports = function (content) {
  
  const processedImageBuffer = sharp(Buffer.from(content))
    .resize(300) 
    .toBuffer();

  return processedImageBuffer;
};
