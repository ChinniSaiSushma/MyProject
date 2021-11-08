import React from 'react'
import { Redirect } from 'react-router-dom'

export default function DSU(props) {
    if(props.loggedIn == false)
    {
        return <Redirect to="/illegal"/>
    }
   
    return (
        <div className="mainContainer2">
            <p className="title" >Daily Status Update</p>
            <div>
                <h3 className="title3">Today's Activities Details</h3>
          <table className="dsuTable">
          <tr className="dsuTable">
           <th className="dsuRow"> <label>Morning 9:00-10:00 AM</label></th>
           <td className="dsuTable"><input className="dsuInp" type="text" placeholder="Write activities worked between 9:00 to 10:00 AM "/></td>
           </tr>
           <tr className="dsuTable">
        <th className="dsuRow"> <label>Morning 10:00-11:00 AM</label></th>
           <td className="dsuTable"><input className="dsuInp" type="text" placeholder="Write activities worked between 10:00 to 11:00 AM "/></td>
           </tr>
           <tr className="dsuTable">
           <th className="dsuRow"> <label>Morning 11:00-12:00 PM</label></th>
           <td className="dsuTable"><input className="dsuInp" type="text" placeholder="Write activities worked between 11:00 to 12:00 PM "/></td>
           </tr>
           <tr className="dsuTable">
           <th className="dsuRow"> <label>Afternoon 12:00-1:00 PM</label></th>
           <td className="dsuTable"><input className="dsuInp" type="text" placeholder="Write activities worked between 12:00 to 1:00 PM "/></td>
           </tr>
           <tr className="dsuTable">
           <th className="dsuRow"> <label>Afternoon 1:00-2:00 PM</label></th>
           <td className="dsuTable"><input className="dsuInp" type="text" placeholder="Write activities worked between 1:00 to 2:00 PM "/></td>
           </tr>
           <tr className="dsuTable">
           <th className="dsuRow"> <label>Afternoon 2:00-3:00 PM</label></th>
           <td className="dsuTable"><input className="dsuInp" type="text" placeholder="Write activities worked between 2:00 to 3:00 PM "/></td>
           </tr>
           <tr className="dsuTable">
           <th className="dsuRow"> <label>Evening 3:00-4:00 PM</label></th>
           <td className="dsuTable"><input className="dsuInp" type="text" placeholder="Write activities worked between 3:00 to 4:00 PM "/></td>
           </tr>
           <tr className="dsuTable">
           <th className="dsuRow"> <label>Evening 4:00-5:00 PM</label></th>
           <td className="dsuTable"><input className="dsuInp" type="text" placeholder="Write activities worked between 4:00 to 5:00 PM "/></td>
           </tr>
           <tr className="dsuTable">
           <th className="dsuRow"> <label>Evening 5:00-6:00 PM</label></th>
           <td className="dsuTable" ><input className="dsuInp" type="text" placeholder="Write activities worked between 5:00 to 6:00 PM "/></td>
           </tr>
           <tr className="dsuTable">
           <th  className="dsuRow"> <label>Evening 6:00-Till you leave Office</label></th>
           <td className="dsuTable"><input className="dsuInp" type="text" placeholder="Write activities worked from 6:00 PM till you leave for the day"/></td>
           </tr>


</table>
<div className="dsuBtn">
<button className="btn">Update Today's Status</button>
</div>

</div>
        </div>
    )
}
