import './App.css';
import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: []
        }
    }

    componentDidMount() {
        fetch("/api/v1/chat")
            .then(response => response.json())
            .then(data => this.setState({chat: [data]}))
        console.log(this.state);
    }

    handleSubmit() {
        fetch("/api/v1/chat/", {
            method: "POST",
            headers: {
                "Content-Type": "Application-Json"
            },
            body: JSON.stringify({
                name: "Patrick",
                title: "My super title!",
                text: "My fun episode!"
            })
        })
    }

    handleEdit(id) {
        fetch("/api/v1/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application-Json"
            },
            body: JSON.stringify({
                name: "Patrick",
                title: "My super title!",
                text: "My fun episode!"
            })
        })
    }

    handleDelete(id) {
        fetch("/" + id, {
            method: "DELETE"
        })
    }

    render() {
        return (<>
            <div className="App">
                <h1>Chat App</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"/>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title"/>
                    <label htmlFor="text">Share your thoughts!</label>
                    <input type="text" name="text" id="text"/>
                    <button type="submit">Chat!</button>
                </form>

                <div className="chat-display">
                    <p>Name</p>
                    <h1>Title</h1>
                    <p>Text</p>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        </>);
    };
}

export default App;
