import CreateProductPageComponent from "./components/CreateProductPageComponent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { newCategory,deleteCategory,saveAttributeToCatDoc } from "../../redux/actions/categoryActions";
import { uploadImagesApiRequest,uploadImagesCloudinaryApiRequest } from "./utils/utils";

const createProductApiRequest = async (formInputs) => {
    const { data } = await axios.post(`/api/products/admin`, { ...formInputs });
    return data;
}



// const uploadImagesApiRequest = async (images, productId) => {
//     const formData = new FormData();
//     Array.from(images).forEach(image => {
//         formData.append("images", image);
//     })
//     await axios.post("/api/products/admin/upload?productId=" + productId, formData);
// }

// const uploadImagesCloudinaryApiRequest = (images,productId) => {
//     const url = "https://api.cloudinary.com/v1_1/datdme9r5/image/upload";
//     const formData = new FormData();
//     for (let i = 0; i < images.length; i++) {
//         let file = images[i];
//         formData.append("file", file);
//         formData.append("upload_preset", "kexdmyzq");
//         fetch(url, {
//             method: "POST",
//             body: formData,
//         })
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             //console.log(data);
//             axios.post("/api/products/admin/upload?cloudinary=true&productId=" + productId,data)
//         })
//     }
// }

const AdminCreateProductPage = () => {

  const {categories} = useSelector((state)=>state.getCategories)
const dispatch=useDispatch();
  
  return <CreateProductPageComponent createProductApiRequest={createProductApiRequest}
   uploadImagesApiRequest={uploadImagesApiRequest} uploadImagesCloudinaryApiRequest={uploadImagesCloudinaryApiRequest}
   categories={categories} reduxDispatch={dispatch} newCategory={newCategory} deleteCategory={deleteCategory}
   saveAttributeToCatDoc={saveAttributeToCatDoc}
   />;
};

export default AdminCreateProductPage;
