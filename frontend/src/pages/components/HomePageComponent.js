import React, { useEffect, useState } from 'react'
import CategoryCardComponent from '../../components/CategoryCardComponent'
import ProductCarouselComponent from '../../components/ProductCarouselComponent'
import { Row ,Container} from 'react-bootstrap'


const HomePageComponent = ({categories,getBestSellers}) => {
//console.log(categories)
// const categories = [
//     "Tablets",
//     "Monitors",
//     "Games",
//     "Printers",
//     "Softwares",
//     "Cameras",
//     "Books",
//     "Videos"
// ]

const[mainCategories,setMainCategories]=useState([])
const[bestSellers,setBestSellers]=useState([])

useEffect(()=>{
  getBestSellers()
  .then((data)=>{
    setBestSellers(data)
  })
  .catch((er)=>console.log(er.response.data.message ? er.response.data.message : er.response.data))
setMainCategories((cat)=>categories.filter((item)=>!item.name.includes("/")))
},[categories])

  return (
<>
<ProductCarouselComponent bestSellers={bestSellers}/>
<Container>
<Row xs={1} md={2} className="g-4 mt-5">
    {mainCategories.map((category,idx)=>(
        <CategoryCardComponent key={idx} category={category} idx={idx}/>
    ))}
</Row>
</Container>


</>


  )
}

export default HomePageComponent
