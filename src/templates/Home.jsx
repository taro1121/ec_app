import React from 'react';
import { getUserId, getUsername } from '../reducks/users/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { signOutAction } from '../reducks/users/actions';
import { signOut } from '../reducks/users/operations';

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);

  return (
    <div>
      <h2>Home</h2>
      <p>User ID: {uid}</p>
      <p>Username: {username}</p>
      <button onClick={() => dispatch(signOut())}>SIGN OUT</button>
    </div>
  )
}

export default Home;