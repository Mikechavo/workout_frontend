import React, {useState} from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import './Header.css'

const Header = ({ currentUser, logout }) => {
  const navigate = useNavigate()

 const signOut = () => {
    logout() 
    navigate("/")
  }

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  

  return (
    <Nav className='nav-bar'>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home Page
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/routineindex" className="nav-link">
          Example Routines
        </NavLink>
      </NavItem>
      {/* currentuser exists */}
      {currentUser && (
        <>
        <NavItem>
          <NavLink to="/myroutines" className="nav-link">
            My Routines
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink to="/routinenew" className="nav-link">
          New Routine
        </NavLink>
      </NavItem>
        <NavItem>
        <NavLink to="/" className="nav-link" onClick={signOut}>
          Sign Out
        </NavLink>
      </NavItem>
      </>
      )}
      {/* currentuser is false aka doesn't exist */}
      {!currentUser && (
        <>
          <NavItem>
            <NavLink to="/signin" className="nav-link">
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </NavItem>
          
        </>
      )}
    </Nav>
  )
}

export default Header