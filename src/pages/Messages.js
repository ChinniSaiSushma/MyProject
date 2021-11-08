import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Messages(props) {
    if(props.loggedIn == false)
    {
        return <Redirect to="/illegal"/>
    }
    return (
        <div className="mainContainer3">
            <p className="title">Messages</p>
            <div>
        
            <table className="msgTable">
                <tr className="msgTable">
                    <td className="msgData msgTable">#</td>
                    <td className="msgData  msgTable">Category</td>
                    <td className="msgData  msgTable">Subject</td>
                    <td className="msgData">Delivered On</td>
                </tr>
                <tr className="msgTable">
                    <td colSpan="4" className="msgData">No Data </td>
                    
                </tr>
            </table>
        </div>
        </div>
    )
}
