import './styles.css';
import Logo from '../logo';
import { useState, useEffect } from 'react';
import SuccessIcon from '../../assets/SuccessIcon.png';
import CloseIcon from '../../assets/CloseIcon.png'

export default function ForgotPass() {

    const [success, setSuccess] = useState(false);
    const [errorEmail, setErrorEmail] = useState('');
    const [email, setEmail] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        setSuccess(false);
        setErrorEmail('');

        const validateEmail = /^[^\s@]+@[a-zA-Z]+\.[^\s@]+$/;

        if (!validateEmail.test(email)) {
            setErrorEmail('Enter a valid email.');
            return
        }

        setSuccess(true);
    }

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setSuccess(false);
        }, 2000);


        return () => clearTimeout(timeoutId);
    }, [success]);

    return (
        <div className="container-geral-forgot">

            <div className='box-forgot'>
                <div className="border-forgot">
                    <div className="forgot-container">

                        <div className="text-box-forgot">
                            <h1>Forgot password</h1>
                            <p>Enter your email to receive the password reset link</p>
                        </div>

                        <form className='form-forgot' onSubmit={handleSubmit}>
                            <div className='input-form-forgot'>

                                <label for="email">Email *</label>
                                <input className={!errorEmail ? 'input-ok' : 'input-error'} onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder="Enter your email" />
                                {errorEmail && <span className='errorMessage'>{errorEmail}</span>}
                            </div>

                            <button className='btn-request'>Request </button>

                        </form>

                        <span className="sup-email">support@harpia.com</span>

                        <p className="copyright-forgot">© 2023 SafeLabs. All rights reserved. v2.49.57</p>

                    </div>

                </div>

            </div>

            {success &&
                <div className='success-container'>
                    <img src={SuccessIcon} alt='success icon' />

                    <div className='success-text-box'>
                        <span>Request successful!</span>
                        <p>A new link has been sent to your email.</p>
                    </div>

                    <img className='close-icon' src={CloseIcon} alt='close icon' />

                </div>}

            <Logo />
        </div>
    )
}