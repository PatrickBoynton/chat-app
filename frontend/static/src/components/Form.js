import {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input type="text"
                       value={this.props.chat.name}
                       name="name"
                       id="name"
                       onChange={this.handleInput}/>
                <label htmlFor="title">Title</label>
                <input type="text"
                       value={this.props.chat.text}
                       name="title"
                       onChange={this.handleInput}/>
                <label htmlFor="text">Share your thoughts!</label>
                <input type="text"
                       value={this.props.chat.text}
                       name="text"
                       onChange={this.handleInput}/>
                <button type="submit">Chat!</button>
            </form>
        )
    }
}

export default Form