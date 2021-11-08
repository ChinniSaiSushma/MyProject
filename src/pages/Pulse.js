import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Pulse(props) {

    let history=useHistory()
    const [registeredEmail, setRegisteredEmail] = useState('narendramodi@gmail.com')
    const [registeredPassword, setRegisteredPassword] = useState('merabharathmahaan')

    const onLoginIntoPulse = async() =>
    {
        let dataToSend = new FormData()
        dataToSend.append("registeredEmail",registeredEmail)
        dataToSend.append("registeredPassword",registeredPassword)
        dataToSend.append("funcName","verifyLogin")
        let data = await fetch("https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php",{method:"POST",body:dataToSend})
        // console.log(data)
        let convertedData = await data.json()
       console.log(convertedData)

      console.log(props)
if(convertedData.loggedIn === "yes")
{ 
  props.state(true)
  console.log("inpulse")
   console.log(props)
    history.push({pathname:"/home",state:convertedData})
}

else
{
     props.state(false)
    alert(convertedData.msg)
}
}

return (
    <div className="loginPage">
        <div className="mainDiv">
            <h3 className="signIn">Sign In </h3>
            <input className="inp1" type="text" placeholder="User Email" value={registeredEmail} onChange={(e)=>setRegisteredEmail(e.target.value)}/><br/>
            <input className="inp2" type="password" placeholder="Password" value={registeredPassword} onChange={(e)=>setRegisteredPassword(e.target.value)}/><br/>
            <div className="pulseBtn">
            <button  className="pulseBtn1" onClick={onLoginIntoPulse}>Login</button>
            </div>
            <span > <input className="remember" type="checkbox" />Remember </span>&nbsp;&nbsp;&nbsp;&nbsp;
             <span>Forgot Password?</span>
            <p className="signUp"> Not have an Account?   <span> &nbsp;&nbsp; &nbsp;&nbsp; <a  className="reg"href="https://pulse.brninfotech.com/pulse/modules/admin/Login.php" > Register Here </a> </span> </p>
        </div>
        </div>
    )
}
