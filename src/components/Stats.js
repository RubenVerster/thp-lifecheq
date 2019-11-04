import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'
const Stats = (props) => {
  props = {
    donations: 35,
    adoptions: 4
  }

  return (
    <Card className='text-center' >
      <CardTitle>
        <h1 >Adoptions</h1>
      </CardTitle>
      <CardBody>
        <p>Pets Adopted</p>
        <h1>77</h1>
        <Link to="/adopt" style={{ padding: '8px', margin: '5px', color: 'white', fontSize: '1.5rem' }}>Adopt</Link>
      </CardBody>
    </Card>

  );
};

export default Stats; 