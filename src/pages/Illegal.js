import React from 'react'
import { Link } from 'react-router-dom'
export default function Illegal() {
    return (
        <div className="mainContainer4">
            <h2>Illegal Entry Please Login....</h2>
            <Link  className="logOut1" to="/"> Login </Link>
        </div>
    )
}
