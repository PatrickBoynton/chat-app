import {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
        };
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/chat/rooms');
        const data = await response.json();
        if (!data.detail) {
            this.setState({rooms: data});
        }
    }

    render() {
        const rooms = this.state.rooms?.map(room => <section key={room.id}>
            <button onClick={() => this.props.handleRoomSwitch(room)}>{room.title}</button>

        </section>);
        return <>
            {rooms}
            <div>{this.state.test}</div>
        </>;
    }
}

export default Header;