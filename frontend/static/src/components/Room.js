import {Component} from 'react'
import Login from "./Login";
import Register from "./Register";

class Room extends Component {
    render() {
        return (
            <>
                <Login/>
                <Register/>
                <ul>
                    <li>
                        <h3>Room title</h3>
                    </li>
                </ul>
            </>
        )
    }
}

export default Room