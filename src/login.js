import { useState } from "react";
import Home from "./home";
import { BrowserRouter as Router,Link , Switch, Route,useHistory} from "react-router-dom";

function Login() {
    const [name, setName] = useState('')
    const [password,setPassword] = useState('')
    const [mess, setMess] = useState('')
    let history = useHistory()
    console.log('history',history)
    function handleOnClick() {
        
        if(name == "Tan" & password == '123456'){
            localStorage.setItem("done", true)
            history.replace("/home")
            
        }
        else {
                setMess('Incorrect email or password')
                localStorage.removeItem("done")
        }
        setName('')
        setPassword('')
    }
    return(
        <div className="background">
          
            <div className="container">
                 <div className="header">
                 <p className="heading">Sign in</p>
                <p className="heading-small">Sign in and start managing your candidates!</p>
           </div>
           <div className="input">
               <input className="input-name"
                    placeholder="Login" type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                </input>
               <input className="input-password" 
                    placeholder="Password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
           </div>
           {{mess} && <p 
                style={
                    {
                        color:'red',
                        fontsize:'12px',
                    }
                }
                >{mess}</p>}
           <div className="save">
               <label className="check-box">
                <input className="remember" type="checkbox"></input>
                <p>Remember me</p>
               </label>
               
               <a className="help">Forgot password?</a>
           </div>
           <button className="btn"
                    onClick={handleOnClick}>
                        Login
            </button>
            
            </div>
          
        </div>
    );

    
}

export default Login;