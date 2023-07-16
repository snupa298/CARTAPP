import axios from "axios"
import { useSelector } from "react-redux"
import HomePageComponent from "./components/HomePageComponent"

const HomePage = () => {

  const getBestSellers =async ()=>{
const {data}  = await axios.get("/api/products/bestsellers")
return data;
  }

  const {categories}=useSelector((state)=>state.getCategories)
 // console.log(categories)

  return <HomePageComponent categories={categories} getBestSellers={getBestSellers}/>
}

export default HomePage
