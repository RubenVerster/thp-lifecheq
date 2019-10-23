import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Home = () => {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col>
          <h1>DONATE</h1>
        </Col>
      </Row>
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
    </Container>
  );
};

export default Home;
