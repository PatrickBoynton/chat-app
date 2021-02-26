import {Component} from "react";

class Register extends Component{
render() {
    return (
        <>
            <h2>Register</h2>
        <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
            <label htmlFor="password1">Password</label>
            <input type="password" name="password1"/>
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="password2"/>
            <button type="submit">Register</button>
            <p>Already have an account? Why not <a href="#">Login</a>?</p>
        </form>
        </>
    )
}
}

export default Register