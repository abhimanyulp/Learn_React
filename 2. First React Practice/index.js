function Navbar() {
    return (
        <nav>
            <div className="left">
                <h1>My logo</h1>
            </div>
            <div className="right">
                <button>Button 1</button>
                <button>Button 2</button>
                <button>Button 3</button>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <main>
            <h1>This is main section</h1>
        </main>
    )
}



ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root"))