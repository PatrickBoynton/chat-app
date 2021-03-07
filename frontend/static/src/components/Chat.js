import {Component} from 'react';
import Cookies from 'js-cookie';
import Header from './Header';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            name: '',
            text: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('/rest-auth/user/');
        const data = await response.json();
        this.setState({user: data.username});
        console.log(this.state.user);
    }

    async handlePost(e, object) {
        e.preventDefault();

        await fetch('/api/v1/chat/', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON',
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': Cookies.get('Authorization')
            },
            body: JSON.stringify({
                name: this.state.user,
                title: this.state.title,
                text: this.state.text
            })
        });
        this.setState({name: this.state.user, title: this.state.title, text: this.state.text});
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <>
                <Header/>
                <form action="" onSubmit={(e) => this.handlePost(e)}>
                    <p>{this.state.user}</p>
                    <label htmlFor="text">Share your thoughts!</label>
                    <input type="text"
                           value={this.props.chat?.text}
                           name="text"
                           onChange={this.handleInput}/>
                    <button type="submit">Chat!</button>
                </form>
            </>
        );
    }
}

export default Chat;