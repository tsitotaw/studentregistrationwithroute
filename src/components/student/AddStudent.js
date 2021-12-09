import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddStudent = props => {

    const navigate = useNavigate();

    const [studentName, setStudentName] = useState('');
    const [invalidName, setInvalidName] = useState(false);

    const onNameChangeHandler = (event) => {
        setStudentName(event.target.value);
    };

    /**
     * we will use this handler to send a post request to the server to add new student
     * validation will be checked before
     * toaster message will be provided to the user
     * a user will be redirected to a student list screen
     * @param {*} event 
     */
    const onAddStudentHandler = (event) => {
        event.preventDefault();
        setInvalidName(false);

        if(!isFormValid()){
            setInvalidName(true);
            return false;
        }

        axios.post("http://localhost:8081/students", {
            name: studentName
        }).then(res => {
            alert("Successfully Added");
            navigate("/");
        });
    };

    const isFormValid = () => {
        return (studentName.trim() == "") ? false : true;
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={studentName} onChange={onNameChangeHandler}/>
                { invalidName && <Form.Label className="error__message__label">Please Enter Student Name</Form.Label>}
            </Form.Group>

            <Button variant="primary" type="button" onClick={onAddStudentHandler}>
                Create Student
            </Button>
        </Form>
    );
}

export default AddStudent;