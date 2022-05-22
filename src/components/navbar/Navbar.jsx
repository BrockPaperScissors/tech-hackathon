import './Navbar.css';

export default function Navbar({ getUser, user }) {
    return (
        <nav>
            <a id="left-navbar-button">Home</a>
            <h1>Build-a-Farm</h1>
            { user 
                ? <a>Log out</a>
                : <a 
                    href={process.env.REACT_APP_SERVER_URL + '/auth/google'} id="left-navbar-button"
                >
                    Sign In
                </a>
            }
        </nav>
    );
}