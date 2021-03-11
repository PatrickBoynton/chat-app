import {Component} from 'react';
import Cookies from 'js-cookie';
import Header from '../Header';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            name: '',
            text: '',
            room: 2,
            current_room: 2
        };
        this.handleInput = this.handleInput.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    async componentDidMount() {
    }

    async handlePost(e, object) {
        e.preventDefault();
        this.setState({
            name: this.props.user,
            title: this.state.title,
            text: this.state.text,
            room: this.props.current_room
        });
        console.log('From Post: ' + object);
        await fetch('/api/v1/chat/', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON',
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': Cookies.get('Authorization')
            },
            body: JSON.stringify({
                name: this.props.user,
                title: this.state.title,
                text: this.state.text,
                room: this.props.current_room
            })
        });
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <>
                <form action="" onSubmit={(e) => this.handlePost(e)}>
                    <p>{this.props.user}</p>
                    <div className="input-group">
                        <label htmlFor="text">Share your thoughts!</label>
                        <input type="text"
                               value={this.state.chat?.text}
                               name="text"
                               onChange={this.handleInput}/>
                    </div>
                    <button className="btn btn-success" type="submit">Chat!</button>
                </form>
            </>
        );
    }
}

export default Chat;