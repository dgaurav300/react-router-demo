import { useState } from "react";

function Login(){
    const [inputs, setInputs] = useState({
        username: "",
        pass:"",
        state:""
    });
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        document.getElementById("output").innerHTML=`Login Successfull <br> Your Input is :`+JSON.stringify(inputs);
        
        if(inputs.username===""){
           document.getElementById("error").innerHTML="Username is required<br/>";
            
        }
        if(inputs.state===""){
            document.getElementById("error").innerHTML+="State is required<br/>";
             
         }
        console.log(inputs);
         
    }

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs((prevInputs)=>({...prevInputs,[name]:value}));       

    }
    return (<>
    <div className="login">
        <h1>Login</h1>
        <p id="error" style={{color:"red"}}></p>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <label 
            htmlFor="username">
                UserName:
                <input 
                type="text" 
                name="username"
                onChange={handleChange}
                value={inputs.username}  id="username" />
            </label>
            <br />
            <br />
            <label 
            htmlFor="pass">
                Password:
                <input 
                type="password" 
                name="pass"
                onChange={handleChange}
                value={inputs.pass}  id="pass" />
            </label>
            <br />
            <br />
            <select value={inputs.state} name="state"  id="state" onChange={handleChange}>
            <option value="">-- Select State --</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="RJ">Rajasthan</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="WB">West Bangal</option>
                <option value="BR">Bihar</option>
            </select>

            <br />
            <br />
            <input type="submit"/>

            <p id="output"></p>
        </form> 
    </div>
    </>);
}

export default Login;