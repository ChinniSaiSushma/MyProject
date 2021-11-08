import React from 'react'
import { Redirect } from 'react-router-dom'

export default function More(props) {
    <script src="https://kit.fontawesome.com/24c75de1f5.js" crossorigin="anonymous"></script>
    if(props.loggedIn == false)
    {
        return <Redirect to="/illegal"/>
    }
    return (
        <div className="mainContainer3">
            
            <p className="title">More <i class="fas fa-chevron-right"> Apply Leave </i></p>
            <div className="moreContainer">
            <h4 className="title4">Leave Details</h4>
            
             <label className="moreName">Leave Type:</label>
            <select className="moreOption">
            <option  value="Select">Select</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Emergency Leave">Emergency Leave</option>
            </select><br/>
            <span className="data"> <strong> Casual Leave:</strong> For attending any planned activity.</span><br/>
            <span className="data"> <strong>Sick Leave: </strong>For not feeling well, Unable to come to office.</span><br/>
            <span className="data"><strong>Emergency Leave:</strong>For any Urgencies/emergencies.</span><br/><br/>

           <label className="moreName">Leave Date(s):</label>
           <input className="inpDate" type="date" min="2021-06-21" max="2021-10-21"/><span>till</span><input  type="date" min="2021-06-21" max="2021-10-21"/><br/>
           <span className="data">Total Number of Leaves:</span><br/>
        <span className="data">Leaves Taken: 0 | Max. Leaves: 4 | Leaves Available: 4</span><br/>
        <div className="moreName1">
        <label className="moreName1">Leave Description:</label> 
        </div>
        <div className="msg">
        <textarea  name="message" rows="7" cols="60"/><br/>
        </div>
<div className="moreBtn">
        <button>Apply Leave</button> <sapn><button>Cancel</button></sapn>
        </div>
            </div>
        </div>
    )
}
