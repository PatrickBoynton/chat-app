import './App.css';
import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/v1/chat")
            .then(response => response.json())
            .then(data => data.map(x => console.log(x)))
    }

    handleSubmit() {
        return fetch("http://127.0.0.1:8000/api/v1/chat/")
    }

    render() {
        return (<>
            <div className="App">
                <h1>Chat App</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"/>
                    <label htmlFor="text">Share your thoughts!</label>
                    <input type="text" name="text" id="text"/>
                    <button type="submit">Chat!</button>
                </form>

                <p>Name</p>
                <h1>Title</h1>
                <p>Text</p>
            </div>
        </>);
    };
}

export default App;
