import React, {useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardImg } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import mockRoutines from '../mockRoutines';

const RoutineIndex = () => {

  const [routines, setRoutines] = useState([]);
  const [newRoutine, setNewRoutine] = useState({
    muscle_group: '',
    sets: '',
    reps: '',
    weight: '',
    image: '',
    notes: '',
  });


  const handleInputChange = (e) => {
    const { muscle_group, value } = e.target;
    setNewRoutine({ ...newRoutine, [muscle_group]: value });
  };

  const handleAddRoutine = () => {
    // You can implement logic here to add the new routine to your data or API
    // For now, let's just log it to the console
    console.log('New Routine:', newRoutine);
  };

  return (
    <>
      <div>
        <br></br>
        <div className='index-title'>
        <h1>Recent Added Routine's</h1>
        </div>
        <div className="flex-routines">
          {mockRoutines?.map((routine, index) => {
            return (
              <Card key={index} className="routine-cards">
                <CardImg top width="100%" src={routine.image} alt="" className="routine-picture" />
                <CardBody>
                  <div className="routine-text">
                    <CardTitle>
                      <b>{routine.muscle_group}</b>
                    </CardTitle>
                    <CardSubtitle>
                      Sets: {routine.sets}, Reps: {routine.reps}, Weight: {routine.weight}lbs
                    </CardSubtitle>
                    <CardSubtitle>{routine.notes} $$Side Note </CardSubtitle>
                  </div>
                  <NavLink to={`/routineshow/${routine.id}`} className="nav-link">
                    <Button className="routine-button">More Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoutineIndex;
