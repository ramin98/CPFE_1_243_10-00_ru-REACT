import { Link, Outlet } from "react-router-dom"

function Contacts() {
    return (
      <div>
        <h1>Contacts</h1>
        <Link to='service-contacts'>SERVICE</Link>
        <Outlet/>
      </div>
    )
  }
  
  export default Contacts
  