import LoginUx from "./Login";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitLogin, cleanLoginError } from './LoginActions';
import { useSelector, useDispatch } from 'react-redux';
const Login = () => {
  const Navigator = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const { isLoading, error } = useSelector(state => state.security);
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    if (!error) {
      cleanLoginError(dispatch);
    }
    setFormValues(newFormValues);
  }
  const onSignInClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    Navigator('/signin');
  }
  const onLoginClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
   
    const isLoginSuccess = await submitLogin(dispatch, formValues.email, formValues.password);
    console.log(error);
    if(isLoginSuccess){
      alert('Bienvenido al sistema!');
      Navigator('/home');
    }
    else
    {
      alert('Contraseña o usuario incorrectos');
    }
  }
  return (
    <LoginUx
      passwordValue={formValues.password}
      emailValue={formValues.email}
      onSignInClick={onSignInClick}
      onLoginClick={onLoginClick}
      onChangeHandler={onChangeHandler}
      isLoading={isLoading}
      error={error}
    />
  );
}
export default Login;