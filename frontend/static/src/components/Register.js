import {Component} from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        // this.state ={
        //     user: {
        //         username: "",
        //         email: "",
        //         password1: "",
        //         password2: ""
        //     }
        // }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <>
                <h2>Register</h2>
                <form action="" onSubmit={(e) => this.props.handleRegistration(e, this.props.user)}>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           name="username"
                           value={this.props.user?.username}
                           onChange={this.handleInput}/>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           name="email"
                           value={this.props.user?.email}
                           onChange={this.handleInput}/>
                    <label htmlFor="password1">Password</label>
                    <input type="password"
                           name="password1"
                           value={this.props.user?.password1}
                           onChange={this.handleInput}/>
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password"
                           name="password2"
                           value={this.props.user?.password2}
                           onChange={this.handleInput}/>
                    <button type="submit">Register</button>
                    <p>Already have an account? Why not <a href="/">Login</a>?</p>
                </form>
            </>
        )
    }
}

export default Register