import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"


function Header() {

    return (
      <HeaderTag>
        <nav>
          <ul>
            <li><NavLink activeclassname='active' to='/'>Goods</NavLink></li>
            <li><NavLink activeclassname='active' to='/bag'>Bag</NavLink></li>
            <li><NavLink activeclassname='active'to='/orders'>Orders</NavLink></li>
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