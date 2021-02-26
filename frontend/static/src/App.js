import './App.css';
import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: []
        }

        this.handleInput = this.handleInput.bind(this);
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

    handleEdit(id, event) {
        fetch("/api/v1/chat/" + id + "/update/", {
            method: "PUT",
            headers: {
                "Content-Type": "Application/Json"
            },
            body: JSON.stringify({
                name: "Patrick",
                title: "My super title!",
                text: "My fun episode!"
            })
        })
    }

    handleDelete(id) {
        fetch("api/v1/chat/" + id + "/delete/", {
            method: "DELETE"
        })
        this.setState({name: this.state.name, title: this.state.title, text: this.state.text})
    }

    render() {
        const chats = this.state.chat.map((x) => (
                        <li key={x.id}>
                            <p>{x.name}</p>
                            <h1>{x.title}</h1>
                            <p>{x.text}</p>
                            <button onClick={(event) => this.handleEdit(x.id, event)}>Edit</button>
                            <button onClick={() => this.handleDelete(x.id, this.state)}>Delete</button>
                        </li>));
        return (<>
            <div className="App">
                <h1>Chat App</h1>
                <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                           value={this.state.chat.name}
                           name="name"
                           id="name"
                           onChange={this.handleInput}/>
                    <label htmlFor="title">Title</label>
                    <input type="text"
                           value={this.state.chat.text}
                           name="title"
                           onChange={this.handleInput}/>
                    <label htmlFor="text">Share your thoughts!</label>
                    <input type="text"
                           value={this.state.chat.text}
                           name="text"
                           onChange={this.handleInput}/>
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
