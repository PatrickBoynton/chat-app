import {Component} from 'react';
import Cookies from 'js-cookie';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        if (this.state.isLoggedIn) {
            const options = {
                headers: {
                    'Content-Type': 'Application/Json',
                    'X-CSRFToken': Cookies.get('csrftoken'),
                    'Authorization': Cookies.get('Authorization')
                }
            };
            console.log(options);
            fetch('/api/v1/chat', options)
                .then(response => response.json())
                .then(data => this.setState({chat: [...data]}));
            console.log('Logged in.');
        } else {
            console.log('Logged out.');
        }
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleLogin(e, object) {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({
                username: object.username,
                email: object.email,
                password: object.password
            }),
        };
        const response = await fetch('/rest-auth/login/', options);
        const data = await response.json().catch(error => console.log(error));
        console.log(data);
        if (data.key) {
            Cookies.set('Authorization', `Token ${data.key}`);
            this.setState({isLoggedIn: !!Cookies.get('Authorization')});
        } else {
            alert('Did not log in.');
        }
    }

    render() {
        return (<>
            <h2>Login</h2>
            <form className="d-flex flex-column" onSubmit={(e) => this.handleLogin(e, this.state)}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           name="username"
                           value={this.state.username}
                           onChange={this.handleInput}/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           name="email"
                           value={this.state.email}
                           onChange={this.handleInput}/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           name="password"
                           value={this.state.password}
                           onChange={this.handleInput}/>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <p>Don't have an account? Why not <a onClick={() => this.props.loginOrRegister()} href="#">Register</a>first?
            </p>
        </>);
    }
}

export default Login;