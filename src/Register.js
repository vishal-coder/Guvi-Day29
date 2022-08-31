import { Button } from "@mui/material";

export function Register() {
    return (
        <div className="registerPage">
            <div className="registerContainer">
                <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDM4MDE5OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"/>
                <div className="registerRightContainer">
                    <h2>Create an Account</h2>
                    <div className="registerDivs">
                        <input type="text" className="registerFirstName" placeholder="First Name" />
                        <input type="text" className="registerLastName" placeholder="Last Name" />
                    </div>
                    <div  className="registerDivs">
                        <input type="text" className="registerEmail" placeholder="Email" />
                    </div>
                    <div  className="registerDivs">
                        <input type="text" className="registerPassword" placeholder="Password" />
                        <input type="text" className="registerRepeatPassword" placeholder="Repeat Password" />
                    </div>
                    <hr className="divider"/>
                    <div className="registerButtonsContainer">  
                        <Button type="button" className="registerAccount">Register Account</Button>
                        <Button type="button" className="registerGoogle">Register With Google</Button>
                        <Button type="button" className="registerFaceBook">Register With Facebook</Button>
                    </div>
                    <hr className="divider"/>
                    <div className="registerLinks">
                        <a href="#">Forgot Password?</a>
                        <a href="#">Already have an account? Login!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
