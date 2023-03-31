import Button from 'react-bootstrap/Button';
import Dog from './Dog';
import { useState } from 'react';

function AboutYourDog() {

  const [getDogs, setDogs] = useState([{ id: 1, showRemoveButton: false }]);

  function addDog() {
    var newDog = { id: getDogs.length + 1, showRemoveButton: true };
    setDogs(arr => [...arr, newDog]); // push doesn't work on arrays in state
  }

  function removeDog(id) {
    setDogs(getDogs.filter(dog => dog.id != id));
  }

  return (
    <div style={{ border: '1px solid black' }}>
      <b>About your dog(s)</b>
      {getDogs.map(dog => (
        <Dog key={dog.id} id={dog.id} showRemoveButton={dog.showRemoveButton} handleRemoveDog={removeDog} />
      ))}
      <Button size='sm' onClick={addDog}>Add dog</Button>
    </div>
  );
}

export default AboutYourDog;
