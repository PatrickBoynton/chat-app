function Chat(props) {
    return (
        <form action="" onSubmit={(e) => props.handlePost(e)}>
            <label htmlFor="name">Name</label>
            <input type="text"
                   value={props.chat?.name}
                   name="name"
                   onChange={props.handleInput}/>
            <label htmlFor="title">Title</label>
            <input type="text"
                   value={props.chat?.text}
                   name="title"
                   onChange={props.handleInput}/>
            <label htmlFor="text">Share your thoughts!</label>
            <input type="text"
                   value={props.chat?.text}
                   name="text"
                   onChange={props.handleInput}/>
            <button type="submit">Chat!</button>
        </form>
    )
}

export default Chat