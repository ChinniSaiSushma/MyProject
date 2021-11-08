import React from 'react'
import { Redirect,useLocation } from 'react-router-dom'


export default function Home(props) {

    let location=useLocation()
    console.log(location)

console.log(props.loggedIn)

if(props.loggedIn == false)
{
    return <Redirect to="/illegal"/>
}



   
return ( 
        <div className="mainContainer1">
        <p className="title">Home</p>
        <div className="homeContainer">
            <div>
          
            {/* <h3>location pathname is {location.pathname}</h3> */}
               <img className="image" src={"https://pulse.brninfotech.com/pulse/modules/admin/"+location.state.profileImagePath} />
               <h3 className="name"> {location.state.firstName}</h3>
               <p className="details">COURSE: REACT</p>
              <p className="details">BATCH ID: {location.state.batchID}</p>
              <p className="details">STUDENT ID: {location.state.studentID}</p> 
              </div>

<div >
    <h3 className="title1"> ATTENDACE SUMMARY</h3>
<table style={{width:"175%",height:"80%"}} >
    <tr>
 <th className="homeRow1">Total Days</th>
 <td className="homeRow1">75</td>
</tr>
<tr>
 <th className="homeRow2">Working Days</th>
 <td className="homeRow2">65</td>
</tr>
<tr>
 <th className="homeRow1">Leaves</th>
 <td className="homeRow1">0 days</td>
</tr>
<tr>
 <th className="homeRow2">Absents</th>
 <td className="homeRow2">52 days</td>
</tr>
<tr>
 <th className="homeRow1">Days Attended</th>
 <td className="homeRow1">13 days</td>
</tr>
<tr>
 <th className="homeRow2">Updates Sent</th>
 <td className="homeRow2">13 times</td>
</tr>
<tr>
 <th className="homeRow1">Working Hours</th>
 <td className="homeRow1">528:00:00</td>
</tr>
<tr>
 <th className="homeRow2">Worked Hours</th>
 <td className="homeRow2">120:00:00</td>
</tr>
<tr>
 <th className="homeRow1">Late to Office</th>
 <td className="homeRow1">0 times</td>
</tr>
<tr>
 <th className="homeRow2">Minimum Hrs Missed</th>
 <td className="homeRow2">0 times</td>
</tr>
<tr>
 <th className="homeRow1">Max Points</th>
 <td className="homeRow1">1950</td>
</tr>
<tr>
 <th className="homeRow2">Points Earned</th>
 <td className="homeRow2">-1170</td>
</tr>
<tr>
 <th className="homeRow1">Your Performance Score</th>
 <td className="homeRow1">-60%</td>
</tr>
</table>
</div>

<div className="homeDiv">
<h3 className="title2">Attendance Details</h3>
<label className="records">Records</label>
<select>
<option>All</option>
<option >2</option>
<option >4</option>
<option >6</option>

</select>

<label className="search">My Search</label>
   <input className="search" type="search" />
   <table  style={{height:"70%",marginTop:"2%",textAlign:"center"}}>
<tr >
    <th className="homeRow1">#</th>
    <th className="homeRow1">Date</th>
    <th className="homeRow1">Day Type</th>
    <th className="homeRow1">Check In</th>
    <th className="homeRow1">Check Out</th>
    <th className="homeRow1">Time Spent</th>
    <th className="homeRow1">Spent Summary</th>
    <th className="homeRow1">Points Earned</th>
   </tr>
   <tr>
<td className="homeRow2"> 1</td>
<td className="homeRow2">Mon, 21-Jun-21 </td>
<td className="homeRow2">JustLab</td>
<td className="homeRow2">10:00:00</td>
<td className="homeRow2">06:00:00 </td>
<td className="homeRow2">08:00:00 </td>
<td className="homeRow2">00:00:00 </td>
<td className="homeRow2">30 </td>
</tr>
<tr>
<td className="homeRow1"> 2</td>
<td className="homeRow1">Tue, 22-Jun-21 </td>
<td className="homeRow1">JustLab</td>
<td className="homeRow1">10:00:00</td>
<td className="homeRow1">06:00:00 </td>
<td className="homeRow1">08:00:00 </td>
<td className="homeRow1">00:00:00 </td>
<td className="homeRow1">30 </td>
</tr>
<tr>
<td className="homeRow2"> 3</td>
<td className="homeRow2">Wed, 23-Jun-21 </td>
<td className="homeRow2">JustLab</td>
<td className="homeRow2">10:00:00</td>
<td className="homeRow2">06:00:00 </td>
<td className="homeRow2">08:00:00 </td>
<td className="homeRow2">00:00:00 </td>
<td className="homeRow2">30 </td>
</tr>
<tr>
<td className="homeRow1"> 4</td>
<td className="homeRow1">Thu, 24-Jun-21 </td>
<td className="homeRow1">JustLab</td>
<td className="homeRow1">10:00:00</td>
<td className="homeRow1">06:00:00 </td>
<td className="homeRow1">08:00:00 </td>
<td className="homeRow1">00:00:00 </td>
<td className="homeRow1">30 </td>
</tr>
<tr>
<td className="homeRow2"> 5</td>
<td className="homeRow2">Fri, 25-Jun-21 </td>
<td className="homeRow2">JustLab</td>
<td className="homeRow2">10:00:00</td>
<td className="homeRow2">06:00:00 </td>
<td className="homeRow2">08:00:00 </td>
<td className="homeRow2">00:00:00 </td>
<td className="homeRow2">30 </td>
</tr>
<tr>
<td className="homeRow1"> 6</td>
<td className="homeRow1">Sat, 26-Jun-21 </td>
<td className="homeRow1">JustLab</td>
<td className="homeRow1">10:00:00</td>
<td className="homeRow1">06:00:00 </td>
<td className="homeRow1">08:00:00 </td>
<td className="homeRow1">00:00:00 </td>
<td className="homeRow1">30 </td>
</tr>
  </table>
</div>
   </div>
  </div>
    )
}
