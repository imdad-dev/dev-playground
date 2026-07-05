const path = require("path");

console.log(__dirname);  // directory name 
console.log("file name is : " , __filename)  // file name 

/*note : only this two contrants work in commonjs  */

// const filePath = path.join("uploads/" , "images"  , "data1.png");

// const parseData = path.parse(filePath)
// const resolvedPath = path.resolve(filePath);
// const extname = path.extname(filePath);
// const basename = path.basename(filePath);
// const dirname = path.dirname(filePath)
// const normalize = path.normalize(filePath)

// console.log({ parseData ,filePath , resolvedPath , extname , basename , dirname , normalize});


// serves static files (like images, CSS, JS)
const fs = require("fs")
const staticPath = path.join(__dirname , "public" , "asset")
console.log("Static file will be serve from  " , staticPath);

// File Upload Validation , allows only .png and .jpg


const saveUpload = (fileName , content) =>{
    const ext = path.extname(fileName);
   const savePath =path.resolve(fileName);
    if(ext === ".png" || ext ===".jpg"){
        console.log("save upload file successfully" , savePath);
    }  else {
        console.log("Invalid file type : " , ext);
        return ;
    }
  fs.writeFile(savePath , "content" , (err) =>{
    if(err) return ;
    console.log("write file successfully")
  })

}

saveUpload("Image.png" , "binary image process data .........")
saveUpload("resume.pdf")

console.log(process.cwd())
