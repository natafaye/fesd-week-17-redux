import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from './userSlice';

export default function LoginPage() {
  const [userValue, setUserValue] = useState(0);

  const userList = useSelector(state => state.users.userList)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginButtonClick = () => {
    dispatch(setLoggedInUser(parseInt(userValue)))
    navigate("/")
  }

  return (
    <div className="row">
      <div className="col">
        <h2>Fake Login Form</h2>
        <select 
          className="form-select mt-3"
          value={userValue} 
          onChange={(event) => setUserValue(event.target.value)}
        >
          { userList.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
        <button className="btn btn-primary mt-3" onClick={onLoginButtonClick}>Login</button>
      </div>
    </div>
  )
}
