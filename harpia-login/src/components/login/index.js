import './styles.css'

export default function Login() {
    return (
        <div className='box-login'>

            <div className="border">
                <div className='login-container'>

                    <div className='text-box'>
                        <h1>Welcome back</h1>
                        <p>to the Harpia SIEM!</p>
                    </div>

                    <form>
                        <div className='input-form'>
                            <label for="email">Email *</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" />
                        </div>

                        <div className='input-form'>
                            <label for="password">Password *</label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" />
                        </div>

                        <div className='bottom-form'>

                            <div className='container-check'>
                                <input type="checkbox" value="" id="exampleCheck2" />
                                <label for="exampleCheck2"> Remember me </label>
                            </div>

                            <a href="#!">  Forgot my password </a>
                        </div>

                        <button className='btn-sing' type="button">Sing in</button>

                    </form>

                    <p className="copyright">© 2022 SafeLabs. All rights reserved. v2.0.0</p>

                </div>

            </div>


        </div>
    )
}