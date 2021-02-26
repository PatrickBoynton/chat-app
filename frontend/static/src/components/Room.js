import {Component} from 'react'
import Login from "./Login";
import Register from "./Register";

class Room extends Component {
    render() {
        return (
            <>
                <Login/>
                <Register/>
            </>
        )
    }
}

export default Room