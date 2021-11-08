import React from 'react'
import { Link , NavLink ,useLocation } from 'react-router-dom'

export default function PageNotFound() {
    let location=useLocation()
    return (
        <div className="mainContainer4">
          <h2>  Page not Found.Please Login.... </h2>
            
            <Link  className="logOut1" to="/"> Login </Link>
          

        </div>
    )
}

