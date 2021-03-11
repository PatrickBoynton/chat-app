import {Component} from 'react';
import Cookies from 'js-cookie';

class ChatDisplay extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
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
            <section key={chat.id} onClick={() => {
                if (chat.name === this.props.user) {
                    console.log(chat);
                }
            }}>
                {
                    chat.room === this.props.current_room
                        ?
                        <>
                            <p>{chat.name}</p>
                            <h1>{chat.title}</h1>
                            <p>{chat.text}</p>
                            <button onClick={(event) => this.props.handleEdit(chat, event)}>Edit</button>
                            <button onClick={() => this.handleDelete(chat.id, this.state)}>Delete</button>
                        </>
                        :
                        null
                }

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