import React from 'react';
import { Card, CardBody, CardTitle, Col, Progress } from 'reactstrap';
import { Link } from 'react-router-dom'
const Stats = (props) => {
  props = {
    donations: 35,
    adoptions: 4
  }

  return (<div>

    <Card className='text-center' >
      <CardTitle style={{ marginTop: 30 }}>
        <h1 >Adoptions</h1>
      </CardTitle>
      <CardBody>
        <p>Pets Adopted</p>
        <h1>77</h1>
        <Link to="/adopt" style={{ padding: '8px', color: 'white', fontSize: '1.5rem' }}>Looking to Adopt?</Link>
      </CardBody>
    </Card>

    <Card className='text-center'>
      <CardTitle style={{ marginTop: 30 }}>
        <h1>Donations</h1>
      </CardTitle>
      <CardBody>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="FHJY3EWAT9G2Q" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_ZA/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </CardBody>
      <CardBody>
        <p>Donations For The Month</p>
        <Progress value={66} color="success" />
      </CardBody>
    </Card>
  </div>

  );
};

export default Stats; 