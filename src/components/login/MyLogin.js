import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './MyLogin.css';

const MyLogin = props => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const loginHandler = (event) => {
        event.preventDefault();

        if(username === "admin" && password === "admin"){
            localStorage.setItem("IsLoggedIn", true);
            setLoginFailed(false);
            props.onLoggingIn(true);
        }
        else {
            setLoginFailed(true);
        }
    }


    return (
        <div className="login__container">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={usernameChangeHandler}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={passwordChangeHandler}/>
                </Form.Group>

                {loginFailed && 
                    <p><Form.Label className="error__message">Invalid Login</Form.Label></p>
                }
                <Button variant="primary" type="button" onClick={loginHandler}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default MyLogin;