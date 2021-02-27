import {Component} from "react";

class Form extends Component {

    render() {
        return (
            <form action="" onSubmit={(e) => this.props.handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input type="text"
                       value={this.props.chat?.name}
                       name="name"
                       onChange={this.props.handleInput}/>
                <label htmlFor="title">Title</label>
                <input type="text"
                       value={this.props.chat?.text}
                       name="title"
                       onChange={this.props.handleInput}/>
                <label htmlFor="text">Share your thoughts!</label>
                <input type="text"
                       value={this.props.chat?.text}
                       name="text"
                       onChange={this.props.handleInput}/>
                <button type="submit">Chat!</button>
            </form>
        )
    }
}

export default Form