import React from "react";
import { Card, CardBody, CardTitle, Progress } from "reactstrap";

const Stats = props => {
  props = {
    donations: 35,
    adoptions: 4
  };

  return (
    <div>
      <Card className="text-center">
        <CardTitle style={{ marginTop: 30 }}>
          <h1>Adoptions</h1>
        </CardTitle>
        <CardBody>
          <p>Pets Adopted</p>
          <h1>77</h1>
          Looking to Adopt?
        </CardBody>
      </Card>

      <Card className="text-center">
        <CardTitle style={{ marginTop: 30 }}>
          <h1>Donations</h1>
        </CardTitle>
        <CardBody>
          <h1>14</h1>

          <p>Donations For The Month</p>
          <Progress value={66} color="success" />
          <CardBody>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input required type="hidden" name="cmd" value="_s-xclick" />
              <input
                required
                type="hidden"
                name="hosted_button_id"
                value="FHJY3EWAT9G2Q"
              />
              <input
                required
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
        </CardBody>
      </Card>
    </div>
  );
};

export default Stats;
