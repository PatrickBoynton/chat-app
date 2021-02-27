import Login from "./Login";
import Register from "./Register";
import Form from "./Form";
import FormDisplay from "./FormDisplay";
import {Component} from "react";

class Room extends Component {
    render() {

        return (
            <>
                <Form handleInput={this.props.handleInput}
                      handlePost={this.props.handlePost}/>

                <FormDisplay chat={this.props.chat}
                             handleEdit={this.props.handleEdit}
                             handleDelete={this.props.handleDelete}/>
                <Login user={this.props.user}
                       handleLogin={this.props.handleLogin}
                       handleInput={this.props.handleInput}/>
                {/*Remember to change it to props when passing it down not state.*/}
                <Register user={this.props.user}
                          handleRegistration={this.props.handleRegistration}
                          handleInput={this.props.handleInput}/>
            </>
        )
    }
}

export default Room