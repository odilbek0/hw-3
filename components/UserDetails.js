import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.usersData);
  const { user, loading, error } = userData;
  const onBackClick = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>

      <button onClick={onBackClick}>back</button>
    </div>
  );
};

export default UserDetails;
