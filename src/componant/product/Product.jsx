import React, { useEffect, useState } from 'react'

export default function Product() {
  let [produc,setProduct]=useState([])
const getele=async()=>{
  let response = await fetch("https://fakestoreapi.com/products")
   let data = await response.json();
   console.log(data)
   setProduct(data)

}
useEffect (()=>{
getele()
},[])

  return (
    <div className="row">
      {
        produc.map((ele)=>{
          return(
            <div className="col-md-4" key={ele.id}>
              <h2>{ele.title}</h2>
              <span>Price : {ele.price}</span>
              <img src={ele.image} alt=""  className='img-fluid'/>
              <p>rate : {ele.rating.rate}</p>
            </div>
          )
        })
      }
    </div>
  )
}
