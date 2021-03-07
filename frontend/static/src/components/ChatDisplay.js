import {Component} from 'react';
import Cookies from 'js-cookie';

class ChatDisplay extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(chat) {
        fetch('/api/v1/chat/' + chat.id + '/update/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/Json',
                'Authorization': Cookies.get('Authorization'),
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify({
                name: chat.name,
                text: chat.text
            })
        });

        this.setState({name: chat.name, text: chat.title});
        this.props.handleEditMode();
    }

    handleDelete(chat) {
        fetch('api/v1/chat/' + chat.id + '/delete/', {
            method: 'DELETE',
            headers: {
                'Application-Type': 'Application/Json',
                'Authorization': Cookies.get('Authorization')
            }

        });
        this.setState({name: chat.name, title: chat.title, text: chat.text});
    }

    render() {
        const chats = this.props.chat?.map((chat) => (
            <section key={chat.id} onClick={() => console.log(chat.id)}>
                <p>{chat.name}</p>
                <h1>{chat.title}</h1>
                <p>{chat.text}</p>
                <button onClick={(event) => this.handleEdit(chat, event)}>Edit</button>
                <button onClick={() => this.handleDelete(chat.id, this.state)}>Delete</button>
            </section>));
        return (
            <>
                <div className="chat-display">
                    {chats}
                </div>
            </>
        );
    }
}

export default ChatDisplay;