import {Component} from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password1: "",
            password2: ""
        }
    }

    render() {
        return (
            <>
                <h2>Register</h2>
                <form action="" onSubmit={(e) =>
                    this.props.handleRegistration(e, this.props)}>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           name="username"
                           value={this.props.username}
                           onChange={this.props.handleInput}/>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           name="email"
                           value={this.props.email}
                           onChange={this.props.handleInput}/>
                    <label htmlFor="password1">Password</label>
                    <input type="password"
                           name="password1"
                           value={this.props.password1}
                           onChange={this.props.handleInput}/>
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password"
                           name="password2"
                           value={this.props.password2}
                           onChange={this.props.handleInput}/>
                    <button type="submit">Register</button>
                    <p>Already have an account? Why not <a href="/">Login</a>?</p>
                </form>
            </>
        )
    }
}

export default Register