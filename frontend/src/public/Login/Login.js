import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Splash from '../../components/splash/Splash';
import MinotaurLottieTitleLogo from '../../components/lotties/minotaurLottieTitleLogo';
import {doLogin} from '../../services/AuthService';

function Login() {

    /* Splash */

    const [loadingSplash, setLoadingSplash] = useState(false);

    useEffect(() => {
        setLoadingSplash(true);
        
        setTimeout(() => {
            setLoadingSplash(false);
        }, 2500);
    }, []);

    /* Form */
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
        
    function OnChangeInput(event) {
        
        if(event.target.id === 'email') {

            setEmail(event.target.value);
        } else {

            setPassword(event.target.value);
        };
    };

    function OnSubmit(event) {

        event.preventDefault();
        
        doLogin(email, password)
            .then(response => {

                if(response) {
                    
                    localStorage.setItem('token', response.token);
                    history.push('/settings');
                }
            })
            .catch(err => {
                setError(err);
                console.log(`Error: ${err}`)
            })
    };

    return (
        <main className='main-login'>
            <section className="vh-lg-100 lg-0 bg-sort d-flex align-items-center">

            {
                loadingSplash ? 

                <Splash></Splash>

                :
                
                <div className='container login-open'>
                    {/* <p className='text-center'>
                        <Link to='/' className='d-flex align-items-center justify-content-center'>
                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                        Back to homepage!
                        </Link>
                    </p> */}
                    <div className='col-12 d-flex align-items-center justify-content-center'>
                        
                        <div className='col-12 bg-white border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500 login-container'>
                            <div className='text-center logo-login'>
                               <div>
                                    <img alt="LaserEyes" src="../../../img/laserEyes.png" className="logo-laserEyes left"></img>

                                    <img alt="LaserEyes" src="../../../img/laserEyes.png" className="logo-laserEyes right"></img>

                                    <img alt='Minotaur' width={150} src='../../../img/favicon/android-chrome-192x192.png'></img>
                               </div>
                            </div>
                            <div className='text-center logo-title'>
                                <MinotaurLottieTitleLogo></MinotaurLottieTitleLogo>
                            </div>
                            <div className='text-center text-md-center mb-4 mt-md-0 logo-sub-title'>
                                <h1 className='mb-0 h3'>TraderBot</h1>
                            </div>
                            <div className='text-center text-md-center mb-4 mt-md-0'>
                                <h2 className='mb-0 h5'> Sign in to our platform</h2>
                            </div>
                            <form className='mt-4' action='#' onSubmit={OnSubmit}>
                                <div className="form-group mb-4">
                                    <label htmlFor="email">Your Email</label>
                                    <div className="input-group input-group--login">
                                        <span className="input-group-text" id="basic-addon1">
                                            <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </span>
                                        <input type="email" className="form-control" placeholder="Email" id="email" autoFocus required onChange={OnChangeInput}/>
                                    </div>  
                                </div>
                                <div className="form-group">
                                    <div className="form-group mb-4">
                                        <label htmlFor="password">Your Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon2">
                                                <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                                            </span>
                                            <input type="password" placeholder="Password" className="form-control" id="password" required onChange={OnChangeInput}/>
                                        </div>  
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-top mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="remember"/>
                                        <label className="form-check-label mb-0" htmlFor="remember">
                                            Remember me
                                        </label>
                                    </div>
                                    <div><Link to='/' className="small text-right">Lost password?</Link></div>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-gray-800">Sign in</button>
                                </div>
                                {
                                    error ?

                                    <div className='text-center error-message mt-2'>{error}</div>

                                    :

                                    <React.Fragment></React.Fragment>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            }
            </section>
        </main>
    )
}

export default Login;