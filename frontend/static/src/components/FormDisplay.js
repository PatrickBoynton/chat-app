import {Component} from "react";

class FormDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const chats = this.props.chat?.map((x) => (
            <li key={x.id}>
                <p>{x.name}</p>
                <h1>{x.title}</h1>
                <p>{x.text}</p>
                <button onClick={(event) => this.handleEdit(x.id, event)}>Edit</button>
                <button onClick={() => this.handleDelete(x.id, this.state)}>Delete</button>
            </li>));
        return (
            <div className="chat-display">
                <ul>
                    {chats}
                </ul>
            </div>
        )
    }
}

export default FormDisplay