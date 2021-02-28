import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import User from '../User/User';
import './UserDetails.css'

const UserDetails = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('https://api.mocki.io/v1/6032dffd')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])
  
  const handleAddUser = () => {
      console.log('Clicked')
  }

    return (
        <div className='user-details-container'>
            <div className='user-container'>
            {
                users.map(user => <User user={user} handleAddUser={handleAddUser}></User>)
            }  
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
        
    );
};

export default UserDetails;