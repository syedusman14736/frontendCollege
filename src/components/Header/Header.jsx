
function Header({ children }) {
    return (
        <header className="header header-2 sticky-active" style={{ height: "100%" }}>
            {children}
        </header>

    )
}

export default Header