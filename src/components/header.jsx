import { Link } from "react-router"

const Header = () => {
  return (
    <>
        <header>
            <div className="header">
                <div className="brand-name">Abbos</div>
                <nav>
                    <ul className="links-container">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header