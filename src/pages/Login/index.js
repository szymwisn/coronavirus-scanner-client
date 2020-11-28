import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import Input from 'components/Input';
import userActions from 'state/actions/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    if (login && password) {
      dispatch(userActions.login({ email: login, password }));
    }
  };

  return (
    <div className="flex flex-col" style={{ marginBottom: '78px' }}>
      <div className="text-lg font-medium text-cvsGray">
        Panel logowania - SANEPID
      </div>
      <div className="flex flex-col items-end mt-4">
        <Input
          value={login}
          placeholder="E-mail"
          onChange={handleLoginChange}
        />
        <div className="mt-4 w-full">
          <Input
            value={password}
            type="password"
            placeholder="Haslo"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mt-4">
          <Button primary text="Zaloguj" onClick={handleLoginClick} />
        </div>
      </div>
    </div>
  );
};

export default Login;
