const cloudinary = require('cloudinary').v2;
const fs = require('fs');


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});


    const uploadOnCloudinary = async (localFilePath)=>{
        try {
            if(!localFilePath) return null;

            // === upload file on cloud====
        const response =   await  cloudinary.uploader.upload(localFilePath , {
                resource_type:'auto'
            })
            // === file has been uploaded ======
            console.log(`file is uploaded on cloudinary ${response.url}`)
        } catch (error) {
            fs.unlinkSync(localFilePath) // removes the locally uploaded file from local as the file is upload is failed
            return null;
        }
    }

     
export {uploadOnCloudinary}