import React from "react"
import { Badge } from 'reactstrap';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <Badge>
          <p>
            © Mike Chavez
          </p>
        </Badge>
      </div>
    </>
  )
}

export default Footer