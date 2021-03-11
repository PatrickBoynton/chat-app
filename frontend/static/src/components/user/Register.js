import {Component} from 'react';
import Cookies from 'js-cookie';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: ''
        };

        this.handleRegistration = this.handleRegistration.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    async handleRegistration(e, object) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                
            },
            body: JSON.stringify({
                username: object.username,
                email: object.email,
                password1: object.password1,
                password2: object.password2
            }),
        };

        const response = await fetch('/rest-auth/registration/', options);
        const data = await response.json();

        console.log("Registration data: " + data);

        if (data.key) {
            Cookies.set('Authorization', `Token ${data.key}`);
        }
        this.setState({isLoggedIn: !!Cookies.get('Authorization')});
        e.preventDefault();
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <>
                <h2>Register</h2>
                <form method="/" onSubmit={(e) =>
                    this.handleRegistration(e, this.state)}>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           name="username"
                           value={this.state.username}
                           onChange={this.handleInput}/>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           name="email"
                           value={this.state.email}
                           onChange={this.handleInput}/>
                    <label htmlFor="password1">Password</label>
                    <input type="password"
                           name="password1"
                           value={this.state.password1}
                           onChange={this.handleInput}/>
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password"
                           name="password2"
                           value={this.state.password2}
                           onChange={this.handleInput}/>
                    <button className="btn btn-success" type="submit">Register</button>
                    <p>Already have an account? Why not <a onClick={() => this.props.loginOrRegister()}
                                                           href="#">Login</a>?</p>
                </form>
            </>
        );
    }
}

export default Register;