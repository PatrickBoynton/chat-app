import './App.css';
import {Component} from "react";
import Room from "./components/Room";
import Cookies from 'js-cookie';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: [],
            isLoggedIn: !!Cookies.get("Authorization"),
            username: "",
            email: "",
            password: "",
            password1: "",
            password2: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        if (this.state.isLoggedIn) {
            const options = {
                headers: {
                    "Content-Type": "Application/Json",
                    "Authorization": Cookies.get("Authorization")
                }
            }
            fetch("/api/v1/chat", options)
                .then(response => response.json())
                // .then(data => console.log(data));
            .then(data => this.setState({chat: [...data]}));
            console.log("Logged in.")
        } else {
            console.log("Logged out.")
        }
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    async handlePost(e, object) {
        e.preventDefault();

        await fetch("/api/v1/chat/", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
                "Authorization": Cookies.get("Authorization")
            },
            body: JSON.stringify({
                name: this.state.name,
                title: this.state.title,
                text: this.state.text
            })
        });
        this.setState({name: this.state.name, title: this.state.title, text: this.state.text})
    }

    handleEdit(id) {
        fetch("/api/v1/chat/" + id + "/update/", {
            method: "PUT",
            headers: {
                "Content-Type": "Application/Json",
                "Authorization": Cookies.get("Authorization")
            },
            body: JSON.stringify({
                name: this.state.name,
                title: this.state.title,
                text: this.state.text
            })
        })
    }

    handleDelete(id) {
        fetch("api/v1/chat/" + id + "/delete/", {
            method: "DELETE",
            headers:{
                "Application-Type": "Application/Json",
                "Authorization": Cookies.get("Authorization")
            }

        })
        this.setState({name: this.state.name, title: this.state.title, text: this.state.text})
    }

    async handleRegistration(e, object) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify({
                username: object.user.username,
                email: object.user.email,
                password1: object.user.password1,
                password2: object.user.password2
            }),
        }

        const response = await fetch("/rest-auth/registration/", options);
        const data = await response.json().catch((error) => console.log(error));
        if (data.key) {
            Cookies.set("Authorization", `Token ${data.key}`);
            this.setState({isLoggedIn: !!Cookies.get("Authorization")})
        }
        e.preventDefault();
    }

    async handleLogin(e, object) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
                "Authorization": Cookies.get("Authorization"),
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
        // if (data.key) {
        //     Cookies.set("Authorization", `Token ${data.key}`)
        // }
        // this.setState({isLoggedIn: !!Cookies.get("Authorization")})
        e.preventDefault();
    }

    async handleLogout(e) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "Application/Json",
                "X-CSRFToken": Cookies.get("csrftoken")
            },
            // body: JSON.stringify({
            //     username: object.user.username,
            //     email: object.user.email,
            //     password: object.user.password
            // })
        }
        const response = await fetch("/rest-auth/logout/", options)
        const data = await response.json().catch(error => console.log(error))

        if (data.key) {
            Cookies.remove("Authorization")
            this.setState({[this.props.isLoggedIn]: !!Cookies.get("Authorization")})
        }
    }

    render() {
        return (<>
            <div className="App">
                <h1>Chat App</h1>
                <Room user={this.state}
                      chat={this.state.chat}
                      handlePost={this.handlePost}
                      handleEdit={this.handleEdit}
                      handleDelete={this.handleDelete}
                      handleRegistration={this.handleRegistration}
                      handleLogin={this.handleLogin}
                      handleLogout={this.handleLogout}
                      handleInput={this.handleInput}/>
            </div>
        </>);
    };
}

export default App;
