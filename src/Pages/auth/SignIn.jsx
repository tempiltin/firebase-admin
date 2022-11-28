import React from 'react'

const SignIn = () => {
  return<div className="row">
  <div className="col-lg-12">
     <div className="form-control">
         <input type="text" placeholder='Username...' />
     </div>
  </div>
  <div className="col-lg-12">
     <div className="form-control">
         <input type="password" placeholder='Password...' />
     </div>
  </div>
  <div className="col-12">
     <button>Sign Up</button>
  </div>
</div>
}

export default SignIn