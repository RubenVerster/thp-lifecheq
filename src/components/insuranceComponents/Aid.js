import React, { useState, setState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import {
  Row,
  Card,
  Button,
  UncontrolledCollapse,
  CardBody,
  Container
} from 'reactstrap';
import Switch from '../Switch/Switch';

const UnitAidActionCreate = () => {
  let [
    newUnitTrustDebitOrderAmount,
    setNewUnitTrustDebitOrderAmount
  ] = React.useState();
  let [
    newUnitTrustDebitOrderDay,
    setNewUnitTrustDebitOrderDay
  ] = React.useState();
  let [newUnitTrustFundName, setNewUnitTrustNewFundName] = React.useState();
  let [newUnitTrustActionLabel, setNewUnitTrustActionLabel] = React.useState();
  let [newUnitTrustLumpSum, setNewUnitTrustLumpSum] = React.useState();
  let [newUnitTrustStartMonth, setNewUnitTrustStartMonth] = React.useState();

  const [UnitTrustActions, setUnitTrustActions] = React.useState([]);

  const fetchData = async () => {
    const db = firebase.firestore();
    const data = await db.collection('actions').get();
    setUnitTrustActions(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const onCreate = e => {
    e.preventDefault();

    const db = firebase.firestore();

    //why does ternary operator not work.......?
    // (newUnitTrustActionLabel !== '') ? (
    //   // db.collection('actions').add({
    //   //   label: newUnitTrustActionLabel
    //   // });
    //   alert('New UnitTrust Insurance Added');
    //   setNewUnitTrustActionLabel('');
    // ) : (
    //   alert('Please Review Your Data');
    // )

    if (
      newUnitTrustActionLabel !== undefined ||
      newUnitTrustDebitOrderAmount !== undefined ||
      newUnitTrustDebitOrderDay !== undefined ||
      newUnitTrustFundName !== undefined ||
      newUnitTrustLumpSum !== undefined ||
      newUnitTrustStartMonth !== undefined
    ) {
      db.collection('actions').add({
        actionType: 'new-medical-aid',
        debitOrder: {
          amount: newUnitTrustDebitOrderAmount,
          day: newUnitTrustDebitOrderDay
        },
        fundName: newUnitTrustFundName,
        label: newUnitTrustActionLabel,
        lumpSumContribution: newUnitTrustLumpSum,
        startMonth: newUnitTrustStartMonth
      });
      alert('New Unit Trust Insurance Added');
      setNewUnitTrustActionLabel('');
      setNewUnitTrustDebitOrderAmount('');
      setNewUnitTrustDebitOrderDay('');
      setNewUnitTrustNewFundName('');
      setNewUnitTrustActionLabel('');
      setNewUnitTrustLumpSum('');
      setNewUnitTrustStartMonth('');
      fetchData();
    } else {
      alert('Please Review Your Data');
    }
  };

  return (
    <form onSubmit={onCreate}>
      <label>Debit Order</label>
      <div>
        <input
          value={newUnitTrustDebitOrderAmount}
          onChange={e => {
            setNewUnitTrustDebitOrderAmount(e.target.value);
          }}
          placeholder={'Debit Order Amount'}
        />
        <input
          value={newUnitTrustDebitOrderDay}
          onChange={e => {
            setNewUnitTrustDebitOrderDay(e.target.value);
          }}
          placeholder={'Debit Order Day'}
        />
      </div>

      <label>Fund Name</label>
      <input
        value={newUnitTrustFundName}
        onChange={e => {
          setNewUnitTrustNewFundName(e.target.value);
        }}
        placeholder={'Fund Name'}
      />

      <label>Lump Sum Contribution</label>
      <input
        value={newUnitTrustLumpSum}
        onChange={e => {
          setNewUnitTrustLumpSum(e.target.value);
        }}
        placeholder={'Lump Sum Contribution'}
      />

      <label>Start Month</label>
      <input
        value={newUnitTrustStartMonth}
        onChange={e => {
          setNewUnitTrustStartMonth(e.target.value);
        }}
        placeholder={'DD/MM/YYYY hh:mm'}
      />

      <Button onClick={onCreate}>Create</Button>
    </form>
  );
};

const UnitTrustActionUpdateDelete = ({ unitTrustAction }) => {
  let [maPlanOption, setMaPlanOption] = React.useState();
  let [coverStartDate, setCoverStartDate] = React.useState();
  let [rewards, setRewards] = React.useState();

  //used for switch on bollean value
  const [value, setValue] = useState(!unitTrustAction.rewards);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection('actions')
      .doc(unitTrustAction.id)
      .set({
        actionType: 'new-medical-aid',
        maPlanOption: unitTrustAction.maPlanOption,
        coverStartDate: unitTrustAction.coverStartDate,
        rewardsProgram: rewards
      });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection('actions')
      .doc(unitTrustAction.id)
      .delete();
  };

  return (
    <div style={{ padding: '15px' }}>
      <label>Med-Aid Plan Option</label>
      <input
        placeholder={unitTrustAction.maPlanOption}
        onChange={e => {
          setMaPlanOption(e.target.value);
        }}
      />
      <label>Cover Start Date</label>
      <input
        placeholder={unitTrustAction.coverStartDate}
        onChange={e => {
          setCoverStartDate(e.target.value);
        }}
      />
      <label>Rewards Program?</label>
      <Switch
        isOn={value}
        onColor="#12960c"
        handleToggle={() => setValue(!value)}
      />
      <Button color="info" onClick={onUpdate}>
        Update
      </Button>
      <Button style={{ margin: '15px' }} color="danger" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

const UnitTrust = () => {
  //check permissions in firestore, read and write access granted?

  const [UnitTrustActions, setUnitTrustActions] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('actions').get();
      setUnitTrustActions(
        data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchData();
  }, [UnitTrustActions]);

  return (
    <div>
      <Row>
        <Button
          color="danger"
          id="aidToggle"
          style={{ marginBottom: '1rem', margin: '0 auto 0 auto' }}
        >
          <strong>+</strong> Aid
        </Button>
        <Container>
          <UncontrolledCollapse toggler="#aidToggle">
            <Card>
              <CardBody>
                <UnitAidActionCreate />
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </Container>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Container>
          {UnitTrustActions.map(action => (
            <div>
              {action.actionType === 'new-medical-aid' ? (
                <Card>
                  <span>{action.fundName}</span>
                  <UnitTrustActionUpdateDelete
                    unitTrustAction={action}
                  ></UnitTrustActionUpdateDelete>
                </Card>
              ) : (
                ''
              )}
            </div>
          ))}
        </Container>
      </Row>
    </div>
  );
};

export default UnitTrust;
