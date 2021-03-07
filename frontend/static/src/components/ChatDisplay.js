import {Component} from 'react';
import Cookies from 'js-cookie';

class ChatDisplay extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(id) {
        fetch('/api/v1/chat/' + id + '/update/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/Json',
                'Authorization': Cookies.get('Authorization'),
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify({
                name: this.state.name,
                title: this.state.title,
                text: this.state.text
            })
        });
    }

    handleDelete(id) {
        fetch('api/v1/chat/' + id + '/delete/', {
            method: 'DELETE',
            headers: {
                'Application-Type': 'Application/Json',
                'Authorization': Cookies.get('Authorization')
            }

        });
        this.setState({name: this.state.name, title: this.state.title, text: this.state.text});
    }

    render() {
        const chats = this.props.chat?.map((chat) => (
            <li key={chat.id} onClick={() => console.log(chat.id)}>
                <p>{chat.name}</p>
                <h1>{chat.title}</h1>
                <p>{chat.text}</p>
                <button onClick={(event) => this.props.handleEdit(chat.id, event)}>Edit</button>
                <button onClick={() => this.props.handleDelete(chat.id, this.state)}>Delete</button>
            </li>));
        return (
            <div className="chat-display">
                <ul>
                    {chats}
                </ul>
            </div>
        );
    }
}

export default ChatDisplay;