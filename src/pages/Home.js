import React, {useState} from 'react'
import '../pages/Home.css'
import fitHome from '../assets/fitHome.png'
import me from '../assets/me.jpg'
import { CardGroup, Card, CardBody, CardTitle, CardText, CardImg, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Home = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='home-container'>
      <div className='image-background'>
       
      </div>

      <div className='home-title'>
        <h1>Welcome to FitFolio</h1>
        <img src= {fitHome}/>
        <CardGroup>
        <Card>
          <Button>
        <CardTitle onClick={toggle}>
          About FitFolio
        </CardTitle>
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>About FitFolio</ModalHeader>
        <ModalBody>
        Allows you to craft your perfect workout with Fitfolio! Tailor routines to your goals, choose from a variety of exercises, and track progress effortlessly. User-friendly, flexible, and designed for your fitness journey. Stay tuned in for updates as I refine and enhance this fitness journey companion!
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </Card>

      <Card>
          <Button>
        <CardTitle onClick={toggle}>
          About Us
        </CardTitle>
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Mike Chavez</ModalHeader>
        <CardImg src= {me}/>
        <ModalBody>
        I'm a dedicated US Army Veteran with a proven track record of leadership and responsibility as a Squad Leader. I'm passionate about technology, not only as a profession but as a personal interest. In my free time, I enjoy building, maintaining, and repairing personal computers.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </Card>
      </CardGroup>
      </div>
    </div>
  )
}

export default Home