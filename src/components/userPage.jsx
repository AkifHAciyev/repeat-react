import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import API from "../api";
import QualitiesList from "./qualitiesList";
import { useNavigate } from "react-router-dom";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    });

    const handleClick = () => {
        navigate("/users");
    };

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>profession: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>completedMeetings: {user.completedMeetings}</p>
                <h2>rate: {user.rate}</h2>
                <button onClick={handleClick}>Все пользователи</button>
            </div>
        );
    } else {
        return <h1>loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
