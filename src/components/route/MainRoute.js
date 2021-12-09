import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "../home/Home";
import MyLogin from "../login/MyLogin";
import AddStudent from "../student/AddStudent";
import EditStudent from "../student/EditStudent";
import ListStudent from "../student/ListStudent";
import { useNavigate } from "react-router-dom";

const MainRoute = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        setLoggedIn(localStorage.getItem("IsLoggedIn"));
    }, [loginSuccessful]);

    const userLoggedInHandler = data => {
        setLoginSuccessful(data);
        navigate("/", { replace: true });
    };
    return (
        <>
        {!isLoggedIn && <MyLogin onLoggingIn={userLoggedInHandler}/>}
        {isLoggedIn && 
            <div className="content">
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/students/create" element={ <AddStudent />} />
                    <Route path="/students" element={ <ListStudent />} />
                    <Route path="/students/edit" element={<EditStudent />} />
                </Routes>
            </div>
        }
        </>
    );
};

export default MainRoute;