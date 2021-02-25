import './App.css';
import {Component} from "react";


class App extends Component {
    render() {
        return (<>
            <div className="App">
                <h1>Chat App</h1>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
                <label htmlFor="text">Share your thoughts!</label>
                <input type="text" name="text" id="text"/>
                <p>Name</p>
                <h1>Title</h1>
                <p>Text</p>
            </div>
        </>);
    };
}

export default App;
