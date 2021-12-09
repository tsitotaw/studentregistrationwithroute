import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './ListStudent.css';

const ListStudent = props => {

    const navigate = useNavigate();
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/students")
        .then(res => {
            setStudentList(res.data);
        });
    }, []);

    const onClickHandler = (student) => {
        navigate(`/students/edit/${student.id}`)
    }

    return (
        <>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Student Name</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        studentList.map(student => {
                            return (
                                <tr onClick={(e) => onClickHandler(student)} className="table_row">
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </>
    );
}

export default ListStudent;