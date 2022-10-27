import React from 'react';
import '../stylesheets/logIn.css';
import {
  AiFillApple,
  AiFillCheckCircle,
  AiFillCheckSquare,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineClose,
} from 'react-icons/ai';
import { GrGoogle } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';

const LogIn = () => {
  const cerrar = () => {
    const $login = document.querySelector('.login');
    $login.classList.remove('login__show');
  };

  return (
    <div className='login'>
      <form className='login-user'>
        <AiOutlineClose className='login-user__close' onClick={cerrar} />
        <div className='login-user__logo'>
          <img
            src='https://global-uploads.webflow.com/5f84bfe6967b7d35c51b76aa/5f84ce91b8caf04e6bf05e09_Jones-White-Logo.png'
            alt='logo empresa'
            className='login-user__img'
          ></img>
          <p className='login-user__text' placeholder='example@gmail.com'>
            Jefferson David
          </p>
        </div>
        <p className='login-user__label'>Username</p>
        <div className='user-email'>
          <AiOutlineMail className='user-email__icon' />
          <input
            type='email'
            className='user-email__input'
            required
            placeholder='example@gmail.com'
          />
          <AiFillCheckCircle className='user-email__check' />
        </div>
        <p className='login-password__label'>Password</p>
        <div className='user-password'>
          <AiOutlineLock className='user-password__icon' />
          <input
            type='password'
            className='user-password__input'
            required
            placeholder='*******'
          />
        </div>
        <div className='login-actions'>
          <div className='remember-user'>
            <AiFillCheckSquare className='remember-user__icon' />
            <p className='remember-user__text'>Remember me</p>
          </div>
          <p className='forgot-password'>Forgot password</p>
        </div>
        <button className='btn-submit'>Sing in</button>
        <div className='way-signUp'>
          <GrGoogle className='way-signUp__google way-signUp__icon' />
          <FaFacebookF className='way-signUp__facebook way-signUp__icon' />
          <AiFillApple className='way-signUp__apple way-signUp__icon' />
        </div>
        <p className='way-signUp__text'>
          Don't have an account?{' '}
          <span className='way-signUp__text--yellow'> Sing Up here</span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
