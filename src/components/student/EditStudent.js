import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import './EditStudent.css';

const EditStudent = props => {

    const navigate = useNavigate();
    const param = useParams();

    const [studentName, setStudentName] = useState('');
    const [invalidName, setInvalidName] = useState(false);

    const onNameChangeHandlerEdit = (event) => {
        setStudentName(event.target.value);
    };
    const onCancelStudentHandler = (event) => {
        event.preventDefault();
        navigate('/');
    };

    useEffect(()=> {
        axios.get(`http://localhost:8081/students/${param.id}`).then(res => {
            setStudentName(res.data.name);
        });
    }, []);

    const onUpdateStudentHandler = (event) => {
        event.preventDefault();
        setInvalidName(false);

        if(!isFormValid()){
            setInvalidName(true);
            return false;
        }

        axios.put(`http://localhost:8081/students/${param.id}`, {
            id: param.id,
            name: studentName
        }).then(res => {
            alert("Successfully Updated");
        });
    };

    const onDeleteStudentHandler = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:8081/students/${param.id}`).then(res => {
            alert("Successfully Deleted");
            navigate('/');
        });
    };

    const isFormValid = () => {
        return (studentName.trim() == "") ? false : true;
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={studentName} onChange={onNameChangeHandlerEdit}/>
                { invalidName && <Form.Label className="error__message__label">Please Enter Student Name</Form.Label>}
            </Form.Group>

            <Button variant="primary" type="button" onClick={onUpdateStudentHandler}>
                Update Student
            </Button>
           
            <Button variant="secondary" type="button" onClick={onCancelStudentHandler}>
                Cancel
            </Button>

            <Button variant="danger" type="button" onClick={onDeleteStudentHandler}>
                Delete
            </Button>
        </Form>
    );
}

export default EditStudent;