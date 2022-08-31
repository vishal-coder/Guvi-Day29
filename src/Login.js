import { Button } from "@mui/material";

export function Login() {
    return (
        <div className="loginPage">
            <div className="loginContainer">
                <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDg0NzkxMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600" />
                <div className="loginFields">
                    <div className="firstWrapper">
                        <h2>Welcome Back!</h2>
                        <div className="email">
                            <input type="text" placeholder="Enter Email Address..." />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="remember">
                            <input type="checkbox" id="remember" />
                            <label for="remember">Remember Me</label>
                        </div>
                        <Button type="button" className="loginButton">Login</Button>
                    </div>
                    <hr className="divider"></hr>
                    <div className="secondWrapper">
                        <Button type="button" className="googleButton">Login With Google</Button>
                        <Button type="button" className="facebookButton">Login With Facebook</Button>
                    </div>
                    <hr className="divider"></hr>
                    <div className="thirdWrapper">
                        <a href="#">Forgot Password?</a>
                        <a href="#">Create An Account!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
