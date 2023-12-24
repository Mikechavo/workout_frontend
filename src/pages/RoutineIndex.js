import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardImg } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import mockRoutines from '../mockRoutines';

const RoutineIndex = () => {
  return (
    <>
      <div>
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
