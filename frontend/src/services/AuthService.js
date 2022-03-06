export function doLogin(email, password) {

    return new Promise((response, reject) => {

        if(email === 'test@test.com' && password === '123') {
    
            response(true);
        }

        reject('Invalid email and/or password. Please try again.');
    });


};

export function doLogout() {

};