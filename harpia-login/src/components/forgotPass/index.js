import './styles.css';
import Logo from '../logo';

export default function ForgotPass() {
    return (
        <div className="container-geral-forgot">

            <div className='box-forgot'>
                <div className="border-forgot">
                    <div className="forgot-container">

                        <div className="text-box-forgot">
                            <h1>Forgot password</h1>
                            <p>Enter your email to receive the password reset link</p>
                        </div>

                        <form className='form-forgot'>
                            <div className='input-form-forgot'>

                                <label for="email">Email *</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" />

                            </div>

                            <button className='btn-request'>Request </button>

                        </form>

                        <span className="sup-email">support@harpia.com</span>

                        <p className="copyright-forgot">© 2023 SafeLabs. All rights reserved. v2.49.57</p>

                    </div>

                </div>

            </div>
            <Logo />
        </div>
    )
}