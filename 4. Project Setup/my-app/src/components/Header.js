import logo from '../logo.svg';

function Header() {
    return (
        <header className="App-header">
            <div id="header-left">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>ReactFacts</h3>
            </div>
            <div id="header-right">
                <h5>React Course - Project 1</h5>
            </div>

        </header>
    )
}

export default Header