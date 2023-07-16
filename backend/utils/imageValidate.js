const imageValidate = (images) =>{
    let imagesTable = []
    if(Array.isArray(images)){
        imagesTable=images
    }else{
imagesTable.push(images)
    }

    if(imagesTable.length > 3){
        return {error:"Send only 3 images"}
    }

    for(let image of imagesTable){
        if(image.size > 1048576) return {error:"Size too large(Above 1MB)"}

        const filetypes = /jpg|jpeg|png/
        const mimetype = filetypes.test(image.mimetype)
        if(!mimetype) return {error:"Incorrect mime type(jpg,png,jpeg)"}

    }
    return 
    {error:false}
}

module.exports=imageValidate;