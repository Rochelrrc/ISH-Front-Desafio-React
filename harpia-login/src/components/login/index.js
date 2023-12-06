import './styles.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import CloseEyeIcon from '../../assets/Closed-eye.png'
import OpenEyeIcon from '../../assets/Open-eye.png'
import AtentionIcon from '../../assets/AtentionIcon.png';
import CloseIcon from '../../assets/CloseIcon.png';

export default function Login() {
    const [isChecked, setIsChecked] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const [form, setForm] = useState({ email: '', password: '' });

    const [errorEmail, setErrorEmail] = useState('');
    const [errorPass, setErrorPass] = useState('');
    const [errorSubmit, setErrorSubmit] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        setErrorEmail('');
        setErrorPass('');
        setErrorSubmit('');

        const validateEmail = /^[^\s@]+@[a-zA-Z]+\.[^\s@]+$/;

        if (!validateEmail.test(form.email)) {
            setErrorEmail('Enter a valid email.');

        }



        if (form.password.length < 6) {
            setErrorPass('Enter a valid password.');
            return
        }

        setErrorSubmit('Login or password is invalid!')
    }

    const handleChangeForm = (e) => {
        const value = e.target.value;
        setForm({ ...form, [e.target.name]: value })
    }


    return (

        <div className='container-geral'>
            <div className='box-login'>

                <div className="border">
                    <div className='login-container'>

                        <div className='text-box'>
                            <h1>Welcome back</h1>
                            <p>to the Harpia SIEM!</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className='input-form'>
                                <label for="email">Email *</label>
                                <input className={!errorEmail ? 'input-ok' : 'input-error'} onChange={(e) => handleChangeForm(e)} value={form.email} type="email" name="email" id="email" placeholder="Enter your email" />
                                {errorEmail && <span className='errorMessage'>{errorEmail}</span>}
                            </div>

                            <div className='input-form input-password'>
                                <label for="password">Password *</label>
                                <input className={!errorPass ? 'input-ok' : 'input-error'} type={!showPass ? 'password' : 'text'} onChange={(e) => handleChangeForm(e)} value={form.password} name="password" id="password" placeholder="Enter your password" />
                                <img className='eye' src={!showPass ? CloseEyeIcon : OpenEyeIcon} alt='icone de exibir senha' onClick={() => setShowPass(!showPass)} />
                                {errorPass && <span className='errorMessage'>{errorPass}</span>}

                                {errorSubmit &&

                                    <div className='popupError'>
                                        <img className='atentionIcon' src={AtentionIcon} alt='atention icon' />
                                        <span>{errorSubmit}</span>
                                        <img className='closeIcon' src={CloseIcon} alt='close icon' onClick={() => setErrorSubmit('')} />
                                    </div>}
                            </div>

                            <div className='bottom-form'>

                                <div className='container-check'>
                                    <input className="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} type="checkbox" value="" id="exampleCheck2" />

                                    <label for="exampleCheck2"> Remember me </label>
                                </div>

                                <Link to="/forgot_password">  Forgot my password </Link>
                            </div>

                            <button className='btn-sing'>Sing in</button>

                        </form>

                        <p className="copyright">© 2022 SafeLabs. All rights reserved. v2.0.0</p>

                    </div>

                </div>


            </div>

            <Logo />

        </div>

    )
}