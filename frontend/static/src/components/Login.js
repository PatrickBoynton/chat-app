import {Component} from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    render() {
        return (<>
            <h2>Login</h2>
            <form action="" onSubmit={(e) => this.props.handleLogin(e, this.props)}>
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
                <label htmlFor="password">Password</label>
                <input type="password"
                       name="password"
                       value={this.props.password}
                       onChange={this.props.handleInput}/>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? Why not <a onClick={() => this.props.loginOrRegister()} href="#">Register</a>first?</p>
        </>)
    }
}

export default Login