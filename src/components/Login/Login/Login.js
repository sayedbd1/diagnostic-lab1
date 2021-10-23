import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import './Login.css'
function Login() {
  const [name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');
  const[isLogin, setIsLogin] = useState(false)
  let history = useHistory();
  let location = useLocation();
  const {
    user,
    isLoading,
    signInUsingGoogle,
    passwordSignIn,
    passwordSignUp,
    logOut
} =useAuth();

  const handleGoogleSignIn = () => {
    signInUsingGoogle();
  }
    const handleRegistration = e =>{
      e.preventDefault();
   console.log(email, password)
  if(password.length < 6){
    setError('Password Must be al least 6 charecters long.')
  return;
  }


if(isLogin) {
  processLogin(email, password);
}
else{
  registerNewUser(email, password);
}
  }
  const processLogin = (email, password)=> {
    passwordSignIn(email, password);
    history.push(location.state?.from ||'/')
  }
 
  const toggleLogin= e => {
    setIsLogin(e.target.checked)
  }

  const handleEmailChange = e => {
     setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  const handleNameChange = e => {
    setName(e.target.value)
  }

  const registerNewUser = (email, password)=>{
    passwordSignUp(email, password);
}

  return (
    <div className="mx-5 py-4">
      <form className="login-form" onSubmit={handleRegistration}>
        <h3 className="text-primary py-5">{isLogin ? 'Login' : 'Register'} Now</h3>
          { !isLogin &&   <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input onBlur={handleNameChange} type="Name" className="form-control" id="inputName" placeholder='Your Name' required/>
          </div>
     </div>}
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggleLogin  } className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          ALready Registered?
        </label>
      </div>
    </div>
  </div>
  <div className="row mb-3 text-danger">{error}</div>
  <button type="submit" className="btn btn-primary">{isLogin ? 'Login': 'Register'}</button>
 
</form> 
      <div>------------or------------</div>
      <button className="py-2 bg-google" onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default Login;
