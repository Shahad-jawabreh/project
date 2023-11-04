import React, { useEffect, useState } from 'react'
export default function Onion(props) {

    let [produc,setProduct]=useState([])

    const getele=async()=>{
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=onion`);
    const data1 = await response.json();
    const data = data1.recipes;
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
          <div className="col-md-4" key={ele.recipe_id}>
            <h2>{ele.title}</h2>
            <span>publisher : {ele.publisher}</span>
            <img src={ele.image_url} alt=""  className='img-fluid'/>
            <p>rate : {ele.social_rank}</p>
          </div>
        )
      })
    }
  </div>
  )
}
