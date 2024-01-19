import React, {useState} from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { CardGroup, Card, CardBody, CardTitle, CardText, CardImg, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
      <Button>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home Page
        </NavLink>
      </NavItem>
      </Button>
      <Button>
      <NavItem>
        <NavLink to="/routineindex" className="nav-link">
          Example Routines
        </NavLink>
      </NavItem>
      </Button>
      {/* currentuser exists */}
      {currentUser && (
        <>
        <Button>
        <NavItem>
          <NavLink to="/myroutines" className="nav-link">
            My Routines
          </NavLink>
        </NavItem>
        </Button>
        <Button>
        <NavItem>
        <NavLink to="/routinenew" className="nav-link">
          New Routine
        </NavLink>
      </NavItem>
      </Button>
      <Button>
        <NavItem>
        <NavLink to="/" className="nav-link" onClick={signOut}>
          Sign Out
        </NavLink>
      </NavItem>
      </Button>
      </>
      )}
      {/* currentuser is false aka doesn't exist */}
      {!currentUser && (
        <>
          <Button>
          <NavItem>
            <NavLink to="/signin" className="nav-link">
              Sign In
            </NavLink>
          </NavItem>
          </Button>
          <Button>
          <NavItem>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </NavItem>
          </Button>
        </>
      )}
    </Nav>
  )
}

export default Header