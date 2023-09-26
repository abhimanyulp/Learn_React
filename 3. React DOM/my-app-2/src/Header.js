import logo from './logo.svg';

function Header() {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header