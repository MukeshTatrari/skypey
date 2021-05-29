import React, { Component } from 'react';
import "../styles/Sidebar.css";
import User from './User';
import keys from "lodash/keys";
import map from 'lodash/map';

const Sidebar = ({ contacts }) => {

    const contactKeys = keys(contacts);
    const userData = map(contactKeys, (contactKey) => {
        const user = contacts[contactKey];
        return <User key={user.user_id} user={user} />

    })
    return (
        <aside className="Sidebar">
            {userData}
        </aside>
    );
};

export default Sidebar;

