import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import UserPage from "./components/userPage";
import UsersList from "./components/usersList";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />}>
                    <Route path=":userId" element={<UserPage />} />
                    <Route path="usersList" element={<UsersList />} />
                </Route>
                <Route path="*" element={<Main />} />
            </Routes>
        </>
    );
}

export default App;
