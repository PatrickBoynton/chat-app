import Login from './Login';
import Register from './Register';
import Chat from './Chat';
import ChatDisplay from './ChatDisplay';
import {Component} from 'react';
import Cookies from 'js-cookie';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginOrRegister: true,
            rooms: [],
        };
        this.handleLoginOrRegister = this.handleLoginOrRegister.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/chat/rooms');
        const data = await response.json();
        console.log(data);
        if(!data.detail) {
         this.setState({rooms: data});
        }
    }

    handleLoginOrRegister() {
        this.setState((previousState) => ({
            loginOrRegister: !previousState.loginOrRegister
        }));
    }

    async handleLogout(e) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
                "X-CSRFToken": Cookies.get("csrftoken"),
            }
        }

        const response = await fetch("/rest-auth/logout/", options)
        const data = await response.json().catch(error => console.log(error))
        Cookies.remove("Authorization")
        this.setState({isLoggedIn: !!Cookies.get("Authorization")})
        console.log(data)
    }
    render() {
        const rooms = this.state.rooms?.map(room => <section key={room.id}>
            <button onClick={() => console.log(room.chat.title)}>{room.title}</button>
        </section>);
        return (
            <>
                {
                    !this.props.isLoggedIn
                        ?
                        <>
                            {
                                this.state.loginOrRegister
                                    ?
                                    <Login user={this.props.user}
                                           loginOrRegister={this.handleLoginOrRegister}
                                           handleLogin={this.props.handleLogin}
                                           isLoggedIn={this.props.isLoggedIn}
                                           handleInput={this.props.handleInput}/>
                                    :
                                    //Remember to change it to props when passing it down not state.
                                    <Register user={this.props.user}
                                              loginOrRegister={this.handleLoginOrRegister}
                                              isLoggedIn={this.props.isLoggedIn}
                                              handleRegistration={this.props.handleRegistration}
                                              handleInput={this.props.handleInput}/>
                            }
                        </>
                        :
                        <>
                            <Chat handleInput={this.props.handleInput}
                                  handlePost={this.props.handlePost}/>

                            <ChatDisplay chat={this.props.chat}
                                         handleEdit={this.props.handleEdit}
                                         handleDelete={this.props.handleDelete}/>
                            {rooms}
                            <button onClick={() => this.handleLogout(this.props.user)}>Logout</button>
                        </>

                }
            </>
        );
    }

}

export default Room;