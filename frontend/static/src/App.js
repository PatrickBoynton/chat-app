import './App.css';
import {Component} from "react";
import Room from "./components/Room";
import Cookies from 'js-cookie';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: [],
            isLoggedIn: !!Cookies.get("Authorization"),
            isEditMode: false,
            password: "",
        }
        this.handleEditMode = this.handleEditMode.bind(this);
    }

    componentDidMount() {
        if (this.state.isLoggedIn) {
            const options = {
                headers: {
                    "Content-Type": "Application/Json",
                    "X-CSRFToken": Cookies.get("csrftoken"),
                    "Authorization": Cookies.get("Authorization")
                }
            }
            console.log(options)
            fetch("/api/v1/chat", options)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0)
                        this.setState({chat: [...data]})
                });
            console.log("Logged in.")
        } else {
            console.log("Logged out.")
        }
    }

    handleEditMode() {
        this.setState((previousState) => ({isEditMode: !previousState}))
    }

    render() {
        return (<>
            <div className="App">
                <h1>Chat App</h1>
                <Room user={this.state}
                      chat={this.state.chat}
                      handleEditMode={this.handleEditMode}
                      isLoggedIn={this.state.isLoggedIn}
                      handleLogout={this.handleLogout}/>
            </div>
        </>);
    };
}

export default App;
