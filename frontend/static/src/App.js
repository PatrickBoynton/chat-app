import './App.css';
import {Component} from "react";
import Form from "./components/Form";
import FormDisplay from "./components/FormDisplay";
import Room from "./components/Room";
import Cookies from 'js-cookie';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: [],
            isLoggedIn: !!Cookies.get("Authorization"),
            user: {
                username: "",
                email: "",
                password1: "",
                password2: ""
            }
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
    }

    componentDidMount() {
        fetch("/api/v1/chat")
            .then(response => response.json())
            .then(data => this.setState({chat: [...data]}));
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    async handleSubmit(e) {
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
            body: JSON.stringify(object),
        }

        const response = await fetch("/rest-auth/registration/", options)
        console.log(response);
        const data = await response.json().catch((error) => console.log(error));
        console.log(data);

        if (data.key) {
            Cookies.set("Authorization", `Token ${data.key}`)
        }
        this.setState({
            user: {
                username: this.state?.username,
                email: this.state.email,
                password1: this.state.password1,
                password2: this.state.password2
            }
        })
    }

    render() {
        return (<>
            <div className="App">
                <h1>Chat App</h1>
                <Form handleInput={this.handleInput}
                      handleSubmit={this.handleSubmit}/>

                <FormDisplay chat={this.state.chat}
                             handleEdit={this.handleEdit}
                             handleDelete={this.handleDelete}/>
                <Room user={this.state.user}
                      handleRegistration={this.handleRegistration}/>
            </div>
        </>);
    };
}

export default App;
