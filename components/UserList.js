import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { Link } from 'react-router-dom';
import classes from './UserList.module.css';

const UserList = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.usersData);
  const { users, loading, error } = usersData;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className={classes.userList}> 
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name} ({user.username})</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
