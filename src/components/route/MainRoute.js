import { Route, Routes } from "react-router";
import Home from "../home/Home";
import MyLogin from "../login/MyLogin";
import AddStudent from "../student/AddStudent";
import EditStudent from "../student/EditStudent";
import ListStudent from "../student/ListStudent";

const MainRoute = () => {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/login" element={ <MyLogin />} />
                <Route path="/students/create" element={ <AddStudent />} />
                <Route path="/students" element={ <ListStudent />} />
                <Route path="/students/edit/:id" element={<EditStudent />} />
            </Routes>
        </div>
    );
};

export default MainRoute;