import Login from "./Login";
import Register from "./Register";
import Form from "./Form";
import FormDisplay from "./FormDisplay";
import {Component} from "react";
import Cookies from 'js-cookie'

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginOrRegister: true
        }
        this.handleLoginOrRegister = this.handleLoginOrRegister.bind(this);
    }

    handleLoginOrRegister() {
        this.setState((previousState) => ({
            loginOrRegister: !previousState.loginOrRegister
        }))
    }
    render() {

        return (
            <>
                {
                    this.props.isLoggedIn === Cookies.get("Authorization")
                        ?
                        <>
                            {
                                this.state.loginOrRegister
                                ?
                                   <Login user={this.props.user}
                                          loginOrRegister={this.handleLoginOrRegister}
                                          handleLogin={this.props.handleLogin}
                                          handleInput={this.props.handleInput}/>
                                :
                                //Remember to change it to props when passing it down not state.
                            <Register user={this.props.user}
                                      loginOrRegister={this.handleLoginOrRegister}
                                      handleRegistration={this.props.handleRegistration}
                                      handleInput={this.props.handleInput}/>
                            }
                        </>
                        :
                        <>
                            <Form handleInput={this.props.handleInput}
                                  handlePost={this.props.handlePost}/>

                            <FormDisplay chat={this.props.chat}
                                         handleEdit={this.props.handleEdit}
                                         handleDelete={this.props.handleDelete}/>
                            <button onClick={(e) => this.props.handleLogout(e)}>Logout</button>
                        </>

                }
            </>
        )
    }

}

export default Room