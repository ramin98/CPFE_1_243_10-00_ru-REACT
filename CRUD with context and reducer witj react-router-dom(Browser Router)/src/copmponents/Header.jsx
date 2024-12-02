import { Link } from "react-router-dom"
import styled from "styled-components"


function Header() {

    return (
      <HeaderTag>
        <nav>
          <ul>
            <li><Link to='/'>Goods</Link></li>
            <li><Link to='/bag'>Bag</Link></li>
            <li><Link to='/orders'>Orders</Link></li>
          </ul>
        </nav>
      </HeaderTag>
    )
  }
  
  export default Header

  const HeaderTag = styled.header`
  padding:50px;
  background-color:black;
  color:white;
  font-size:40px;
  font-weight:900;
  text-align:center;
  `