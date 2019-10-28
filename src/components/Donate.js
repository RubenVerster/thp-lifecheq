import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
const Home = () => {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col>
          <Card >
            <CardTitle>
              <h1 className='text-center'>DONATE</h1>
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

          </Card>
        </Col>
        <Col>
          <h1>Hi</h1></Col>
      </Row>

    </Container>
  );
};

export default Home;
