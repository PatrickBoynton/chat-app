import './App.css';
import {Component} from 'react';
import Room from './components/chat_app/Room';
import Header from './components/Header';
import Cookies from 'js-cookie';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: [],
            isLoggedIn: !!Cookies.get('Authorization'),
            isEditMode: false,
            password: '',
            id: 0,
            user: '',
            room: 2,
            current_room: 2
        };
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRoomSwitch = this.handleRoomSwitch.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('/rest-auth/user/');
        const data = await response.json();
        this.setState({user: data.username});
        console.log(this.state.user);
        if (this.state.isLoggedIn) {
            const options = {
                headers: {
                    'Content-Type': 'Application/Json',
                    'X-CSRFToken': Cookies.get('csrftoken'),
                    'Authorization': Cookies.get('Authorization')
                }
            };
            fetch('/api/v1/chat', options)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0)
                        this.setState({chat: [...data]});
                });
            console.log('Logged in.');
        } else {
            console.log('Logged out.');
        }
    }

    handleEditMode() {
        this.setState((previousState) => ({isEditMode: !previousState}));
    }

    handleRoomSwitch(room) {
        this.setState({current_room: room.id})
    }

    handleEdit(chat) {
        this.props.handleEditMode();
        fetch('/api/v1/chat/' + chat.id + '/update/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/Json',
                'Authorization': Cookies.get('Authorization'),
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify({
                id: chat.id,
                name: chat.name,
                text: chat.text,
                owner: chat.owner,
                room: chat.room
            })
        });

        this.setState({name: chat.name, text: chat.text});
    }

    render() {
        return (<>
            <div className="App">
                <h1>Chat App</h1>
                <Header handleRoomSwitch={this.handleRoomSwitch}/>
                <Room current_room={this.state.current_room}
                      user={this.state.user}
                      chat={this.state.chat}
                      isEditMode={this.state.isEditMode}
                      handleEdit={this.handleEdit}
                      handleEditMode={this.handleEditMode}
                      isLoggedIn={this.state.isLoggedIn}
                      handleLogout={this.handleLogout}/>
            </div>
        </>);
    };
}

export default App;
