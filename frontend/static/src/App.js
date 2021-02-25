import './App.css';
import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: [{
                name: "",
                title: "",
                email: ""
            }]
        }
    }

    componentDidMount() {
        fetch("/api/v1/chat")
            .then(response => response.json())
            .then(data => this.setState({chat: [...data]}));
    }

    handleSubmit(e) {
        e.preventDefault();
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
        });
        console.log(this.state)
    }

    handleEdit(e, id) {
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
        const chats = this.state.chat?.map(x => (<li>
                            <p>{x.name}</p>
                            <h1>{x.title}</h1>
                            <p>{x.text}</p>
                            <button onClick={this.handleEdit}>Edit</button>
                            <button onClick={this.handleDelete}>Delete</button>
                        </li>));
        return (<>
            <div className="App">
                <h1>Chat App</h1>
                <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"/>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title"/>
                    <label htmlFor="text">Share your thoughts!</label>
                    <input type="text" name="text" id="text"/>
                    <button type="submit">Chat!</button>
                </form>

                <div className="chat-display">
                    <ul>
                        {chats}
                    </ul>
                </div>
            </div>
        </>);
    };
}

export default App;
