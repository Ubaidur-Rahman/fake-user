import React from 'react';
import './User.css'

const User = (props) => {
console.log(props)
    const {name, email, gender, number, university, country} = props.user;

    return (
        <div className='user'>
            <div className='user-container'>
                <h4>Name: {name}</h4>
                <p>Email: {email}</p>
                <p><small>Gender: {gender}</small></p>
                <p>Phone: {number}</p>
                <p><small>University: {university}</small></p>
                <h5>From: {country}</h5>
                <button className='user-btn' onClick={() => props.handleAddUser(props.user)}>Add</button>
            </div>
        </div>
    );
};

export default User;