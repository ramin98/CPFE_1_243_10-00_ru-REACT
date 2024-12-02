import { Link,Outlet } from "react-router-dom"


function ServiceContacts() {
    return (
      <div>
        <h1>ServiceContacts</h1>
        <Link to='item'>SERVICE</Link>
        <Outlet/>
      </div>
    )
  }
  
  export default ServiceContacts
  