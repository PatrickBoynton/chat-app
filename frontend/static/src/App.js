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
    }

    componentDidMount() {
        fetch("/api/v1/chat")
            .then(response => response.json())
            .then(data => this.setState({chat: [...data]}));
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    async handlePost(e, object) {
        e.preventDefault();

        await fetch("/api/v1/chat/", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON"
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
                "Content-Type": "Application/Json"
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
            method: "DELETE"
        })
        this.setState({name: this.state.name, title: this.state.title, text: this.state.text})
    }

    async handleRegistration(e, object) {
        e.preventDefault();
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
        }
    }

    handleLogin(e, object) {

        console.log(object.user);
        e.preventDefault();
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
                      handleInput={this.handleInput}/>
            </div>
        </>);
    };
}

export default App;
