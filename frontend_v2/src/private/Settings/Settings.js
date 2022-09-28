import React, {useEffect, useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {getSettings, updateSettings} from '../../services/SettingsService';
import Menu from '../../components/Menu/Menu';
import Symbols from './Symbols';

function Settings() {

    const inputEmail = useRef('');
    const inputNewPassword = useRef('');
    const inputConfirmPassword = useRef('');
    const inputApiUrl = useRef('');
    const inputAccessKey = useRef('');
    const inputSecretKey = useRef('');


    const history = useHistory();
    
    const [error, setError] = useState('');

    const [success, setSuccess] = useState('');

    useEffect(() => {

        const token = localStorage.getItem('token');

        getSettings(token)
            .then(settings => {

                inputEmail.current.value = settings.email;
                inputApiUrl.current.value = settings.apiUrl;
                inputAccessKey.current.value = settings.accessKey;
            })
            .catch(err => {

                if (err.response && err.response.status === 401) {

                    return history.push('/');
                }

                if(err.response) {

                    setError(err.response.data);
                }
                else {

                    setError(err.message);
                }
            })
    }, [])

    function onFormSubmit(event) {

        event.preventDefault();

        if((inputNewPassword.current.value || inputConfirmPassword.current.value) && inputNewPassword.current.value !== inputConfirmPassword.current.value) {

            return setError(`The fields New Password and Confirm Passoword must be equals.`)
        }

        const token = localStorage.getItem('token');
        updateSettings({
            email: inputEmail.current.value,
            password: inputNewPassword.current.value ?  inputNewPassword.current.value : null,
            apiUrl: inputApiUrl.current.value,
            accessKey: inputAccessKey.current.value,
            secretKey: inputSecretKey.current.value ?  inputSecretKey.current.value : null
        }, token)
        .then(result => {

            if(result) {
                setError('');
                setSuccess(`Settings updated successfully!`);
                inputSecretKey.current.value = '';
                inputNewPassword.current.value = '';
                inputConfirmPassword.current.value = '';
            } 
            else {

                setSuccess('');
                setError(`Settings could not be updated`);
            }
        })
        .catch(error => {

            setSuccess('');
            setError(`Settings could not be updated`);
            console.error(error.message);
        })
    }

    return (

        <React.Fragment>
            
            <Menu></Menu>

            <main className='content'>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-4 mb-md-0">
                        <h1 className="h4">Settings</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card card-body border-0 shadow mb-4">
                            <form onSubmit={onFormSubmit}>
                                <h2 className="h5 mb-4">General Info</h2>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input ref={inputEmail} className="form-control" id="email" type="email" placeholder="name@company.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="newPassword">New Password</label>
                                            <input ref={inputNewPassword} className="form-control" id="newPassword" type="password" placeholder="Enter your new password" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input ref={inputConfirmPassword} className="form-control" id="confirmPassword" type="password" placeholder="Your new password again" />
                                        </div>
                                    </div>
                                </div>
                                <h2 className="h5 mb-4">Exchange Info</h2>
                                <div className="row">
                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">API URL</label>
                                            <input ref={inputApiUrl} className="form-control" id="apiUrl" type="text" placeholder="Your API URL" />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="streamUrl">STREAM URL</label>
                                            <input ref={inputStreamUrl} className="form-control" id="streamUrl" type="text" placeholder="Your stream URL" />
                                        </div>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">Access Key</label>
                                            <input ref={inputAccessKey} className="form-control" id="accessKey" type="text" placeholder="Your access key" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">Secret Key</label>
                                            <input ref={inputSecretKey} className="form-control" id="secretKey" type="password" placeholder="Your secret key" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap">
                                        <div className="col-sm-3">
                                            <button className="btn btn-gray-800 mt-2 animate-up-2" type="submit" onClick={onFormSubmit}>Save all</button>
                                        </div>
                                        {
                                            error
                                                ? <div className="alert alert-danger mt-2 col-9 py-2">{error}</div>
                                                : <React.Fragment></React.Fragment>
                                        }
                                        {
                                            success
                                                ? <div className="alert alert-success mt-2 col-9 py-2">{success}</div>
                                                : <React.Fragment></React.Fragment>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Symbols></Symbols>
            </main>
        </React.Fragment>
    )
}

export default Settings;