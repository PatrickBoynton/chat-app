import {Component} from "react";

class FormDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const chats = this.props.chat?.map((x) => (
            <li key={x.id} onClick={() => console.log("clicked!")}>
                <p>{x.name}</p>
                <h1>{x.title}</h1>
                <p>{x.text}</p>
                <button onClick={(event) => this.props.handleEdit(x.id, event)}>Edit</button>
                <button onClick={() => this.props.handleDelete(x.id, this.state)}>Delete</button>
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