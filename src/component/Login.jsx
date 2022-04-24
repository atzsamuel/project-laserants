import React from "react"
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <>

      <div className="container my-5 py-5">
        <form>
          <div className="row justify-content-center">

            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="row">
              <div className="col-md-6">
                {
                  isAuthenticated && (
                    <div>
                      <img src={user.picture} alt={user.name} />
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                    </div>
                  )
                }
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button class="w-50 btn btn-lg btn-primary" onClick={() => loginWithRedirect()}> <i className="fa fa-user me-1"></i>Login with Auth0</button>
              </div>
            </div>
            <p class="mt-5 mb-3 text-muted">Collection store</p>
          </div>
        </form>
      </div>

    </>
  )
}

export default Login;