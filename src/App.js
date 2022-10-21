import React from "react";
import { Route, Routes } from "react-router-dom";
import UserPage from "./components/pages/userPage/userPage";
import UsersListPage from "./components/pages/usersListPage/usersListPage";
import NavBar from "./components/ui/navBar";
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
                    <Route path="usersList" element={<UsersListPage />} />
                </Route>
                <Route path="*" element={<Main />} />
            </Routes>
        </>
    );
}

export default App;
