import React from 'react';
import PetDetails from '../pets/PetDetails'

const Adopt = () => (
  <div>
    <h1 style={{ marginTop: 30 }
    }>ADOPT</h1>
    <PetDetails id={'one'} />
    <PetDetails id={'two'} />
    <PetDetails id={'three'} />
  </div>
);

export default Adopt;