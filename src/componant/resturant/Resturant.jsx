import React from 'react'
import { Link } from 'react-router-dom'
export default function Resturant() {

  return (

    <>
    <section >
      <Link  to='/Pizza'>
        Pizza
      </Link>
 <br />
      <Link  to='/Onion'>
      onion
      </Link>
<br />
      <Link  to='/Salad'>
      salad
      </Link>

    </section>
   
    
    </>
  )
}
