import React from 'react'

function Login() {
  return (
    <div>
        <div class="login_register_wrap section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-md-10">
                <div class="login_wrap">
            		<div class="padding_eight_all bg-white">
                        <div class="heading_s1">
                            <h3>Login</h3>
                        </div>
                        <form method="post">
                            <div class="form-group mb-3">
                                <input type="text" required="" class="form-control" name="email" placeholder="Your Email"/>
                            </div>
                            <div class="form-group mb-3">
                                <input class="form-control" required="" type="password" name="password" placeholder="Password"/>
                            </div>
                            <div class="login_footer form-group mb-3">
                                <div class="chek-form">
                                    <div class="custome-checkbox">
                                        <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value=""/>
                                        <label class="form-check-label" for="exampleCheckbox1"><span>Remember me</span></label>
                                    </div>
                                </div>
                                <a href="#">Forgot password?</a>
                            </div>
                           
                        </form>
                       
                        
                     <div> <a href="signup.html">Sign up now</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Login