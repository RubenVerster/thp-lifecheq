import React from 'react';
import { Progress, Card, CardBody, CardTitle } from 'reactstrap';

const Stats = (props) => {
  props = {
    donations: 35,
    adoptions: 4
  }

  return (
    <div>
      <Card className='text-center' >
        <CardTitle>
          <h1 >Donations</h1>
        </CardTitle>
        <CardBody>
          <p>Donations For The Month</p>
          <Progress value={66} color="success" />
        </CardBody>
        <CardBody>
          <p>Pets Adopted</p>
          <h1>77</h1>
        </CardBody>

      </Card>

    </div >
  );
};

export default Stats; 