import React from 'react';

function NavBar() {

    return (

        <React.Fragment>
            <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
                <a className="navbar-brand me-lg-5" href="/dashboard">
                    <img className="navbar-brand-dark" src="/img/favicon/favicon-32x32.png" alt="Minotaur logo" width={32}></img>
                </a>
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </React.Fragment>
    )
};

export default NavBar;