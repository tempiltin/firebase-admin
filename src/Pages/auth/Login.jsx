import React from 'react'
 
const Login = (props) => {
    const EVENT = (e)=>{
        e.preventDefault()
    }
  return <form className="row" onChange={e => EVENT(e)}>
     <div className="col-lg-12">
        <div className="form-control">
            <input type="text" placeholder='Username...' value={props.loginUserName} onChange={(event)=> props.setLoginUserName(event.target.value)} required />
        </div>
     </div>
     <div className="col-lg-12">
        <div className="form-control">
            <input type="password" placeholder='Password...' value={props.loginUserPassword} onChange={(event)=> props.setLoginUserPassword(event.target.value)} required/>
        </div>
     </div>
     <div className="col-12">
        <button onClick={props.checkbox}>Sign In</button>
        
     </div>
  </form>
}

export default Login