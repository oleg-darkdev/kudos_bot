const PDF2Pic = require("pdf2pic");

const pdf2pic = new PDF2Pic({
  density: 2400, // output pixels per inch
  savename: "kudos", // output file name
  savedir: "./dest/controllers/catalog/", // output file location
  format: "jpg", // output file format
  size: "600x600" // output size in pixels
});

const convertPdfToImg = () => {
  pdf2pic.convert("./dest/data/kudoCard.pdf").then((resolve) => {
    console.log("image converter successfully!");

    return resolve;
  });
}



export default convertPdfToImg