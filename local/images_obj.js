var path = require("node:path");

var image_outDir = "./app/assets/images";
var image_local_dir = "./local/images";

module.exports = [
    {
        name: "logo.png",
        imagePath: path.join(image_local_dir, "logo.png"),
        outDir: image_outDir,
        width: 300,
        height: 300,
    },
    {
        name: "susee.webp",
        imagePath: path.join(image_local_dir, "susee.webp"),
        outDir: image_outDir,
        width: 300,
        height: 200,
    },
    {
        name: "thetkarit.jpeg",
        imagePath: path.join(image_local_dir, "thetkarit.jpeg"),
        outDir: image_outDir,
        width: 300,
        height: 200,
    },
];
