import { Link } from "react-router-dom"


function Header() {
  return (
    <div>
      <Link to='/'>HOME</Link>
      <Link to='/contacts'>CONTACTS</Link>
      <Link to='/about'>ABOUT</Link>
    </div>
  )
}

export default Header
