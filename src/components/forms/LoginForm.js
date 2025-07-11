import React, {useState} from 'react'
import './login.css'
import fflogo from './../../assets/images/fflogo.png'
import avatar from './../../assets/images/avatar.jpg'
import Fade from 'react-reveal/Fade';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([])

    const submitForm = () => {
        const newEntry =  {email: email, password: password }
        setAllEntry([...allEntry,newEntry])
        console.log("hello")
        console.log(allEntry)
    }


return (
    <>
        <div className="split left">
        {/* <img src={building} alt="Building" className="Building"/> */}
        <img src={avatar} alt="Logo" className="LogoLeft"/>
        </div>
        <div className="split right">
        <div className="login-form">
            <form action="" onSubmit= {submitForm}>
                <img src={fflogo} alt="Logo" className="LogoPng"/>
                <h1 className="text-center adjustWelcome">Welcome</h1>
                <div className="form-group inputContainer">
                    {/* <input type="text" className="form-control" placeholder="Username" name="username" required="required" id="username"/> */}
                    {/* <label htmlFor = "email" className="setpass">Email </label> */}
                    <input 
                        type="email" name="email" id="email" 
                        autoComplete="off" value= {email}
                        onChange ={ (e) => setEmail(e.target.value)}
                        placeholder = "user@ffho.com" className= "form-control user"
                    />
                </div>
                <div className="form-group">
                    {/* <input type="password" className="form-control" placeholder="Password" name="password" required="required"/> */}
                    {/* <label htmlFor = "password" className="setpass">Password </label> */}
                    <input 
                        type="password" name="password" id="password" 
                        autoComplete="off" value={password} className= "form-control"
                        placeholder="password"
                        onChange ={ (e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit" value="Log in">Log in</button>
                </div>
            </form>
        </div>
        </div>
    </>
    )
}

export default LoginForm

{/* <h2>Welcome</h2>
<div>
    <label htmlFor = "email">Email: </label>
    <input 
        type="email" name="email" id="email" 
        autoComplete="off" value= {email}
        onChange ={ (e) => setEmail(e.target.value)}
    />
</div>
<div>
    <label htmlFor = "password">Password: </label>
    <input 
        type="password" name="password" id="password" 
        autoComplete="off" value={password}
        onChange ={ (e) => setPassword(e.target.value)}
    />
</div>
<button type="submit" className="btn btn-primary btn-block">Login</button> */}
