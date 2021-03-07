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
    }

    async handleRegistration(e, object) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({
                username: object.user.username,
                email: object.user.email,
                password1: object.user.password1,
                password2: object.user.password2
            }),
        };

        const response = await fetch('/rest-auth/registration/', options);
        const data = await response.json().catch((error) => console.log(error));
        if (data.key) {
            Cookies.set('Authorization', `Token ${data.key}`);
        }
        this.setState({isLoggedIn: !!Cookies.get('Authorization')});
        e.preventDefault();
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
                    <p>Already have an account? Why not <a onClick={() => this.props.loginOrRegister()}
                                                           href="#">Login</a>?</p>
                </form>
            </>
        );
    }
}

export default Register;