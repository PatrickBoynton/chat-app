import {Component} from 'react'

class Login  extends Component{
    render() {
        return (<>
            <h2>Login</h2>
            <form action="">
                <label htmlFor="username">Username</label>
                <input type="text" name="username"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
                <button type="submit">Login</button>
                <p>Don't have an account? Why not <a href="/">Register</a>first?</p>
            </form>
        </>)
    }
}

export default Login