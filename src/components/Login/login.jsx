import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
	const navigate = useNavigate();

	let [values, setValues] = useState({});
	let [showError, setError] = useState(false);

	const onChangeHandler = (e) => {
		setValues({
			...values,
			[e.target.id]: e.target.value,
		});
	};

	const onClickHandler = () => {
		let data = JSON.parse(sessionStorage.getItem('emailData'));

		if(data[values.username] && data[values.username].password == values.password){
			navigate('/email', {state: { email: values.username}});
		}else {
			setError(true);
		}
	};
	return (
		<div className='login-page'>
			<h3>Login To Email</h3>
			{showError && <div className='login-page__error'>Please enter correct username and password</div>}
			<input id='username' placeholder='Username' onChange={onChangeHandler}/>
			<input id='password' placeholder='Password' type={'password'} onChange={onChangeHandler}/>
			<button onClick={onClickHandler}>LOGIN</button>

		</div>

	);
};

export default Login;