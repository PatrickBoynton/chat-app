import './App.css';
import {Component} from "react";
import Room from "./components/Room";
import Cookies from 'js-cookie';
import ChatDisplay from './components/ChatDisplay';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: [],
            isLoggedIn: !!Cookies.get("Authorization"),
            password: "",
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        if (this.state.isLoggedIn) {
            const options = {
                headers: {
                    "Content-Type": "Application/Json",
                    "X-CSRFToken": Cookies.get("csrftoken"),
                    "Authorization": Cookies.get("Authorization")
                }
            }
            console.log(options)
            fetch("/api/v1/chat", options)
                .then(response => response.json())
                // .then(data => this.setState({chat: [...data]}));
                .then(data => console.log(data));
            console.log("Logged in.")
        } else {
            console.log("Logged out.")
        }
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }


    async handleLogin(e, object) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify({
                username: object.user.username,
                email: object.user.email,
                password: object.user.password
            }),
        }
        const response = await fetch("/rest-auth/login/", options);
        const data = await response.json().catch(error => console.log(error));
        console.log(data);
        if (data.key) {
            Cookies.set("Authorization", `Token ${data.key}`)
        }
        this.setState({isLoggedIn: !!Cookies.get("Authorization")})
        e.preventDefault();
    }

    async handleLogout(e) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
                "X-CSRFToken": Cookies.get("csrftoken"),
            }
        }

        const response = await fetch("/rest-auth/logout/", options)
        const data = await response.json().catch(error => console.log(error))
        Cookies.remove("Authorization")
        this.setState({isLoggedIn: !!Cookies.get("Authorization")})
        console.log(data)
    }

    render() {
        return (<>
            <div className="App">
                <h1>Chat App</h1>
                <Room user={this.state}
                      chat={this.state.chat}
                      handleLogin={this.handleLogin}
                      handleLogout={this.handleLogout}/>
            </div>
        </>);
    };
}

export default App;
