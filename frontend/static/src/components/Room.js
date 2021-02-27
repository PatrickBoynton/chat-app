import {Component} from 'react'
import Login from "./Login";
import Register from "./Register";

class Room extends Component {
    render() {
        return (
            <>
                <Login/>
                {/*Remember to change it to props when passing it down not state.*/}
                <Register handleRegistration={this.props.handleRegistration}/>
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