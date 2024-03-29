import { Button, Col, Row } from 'react-bootstrap';
import Dog from '../../YourDogs/Dog';
import { useEffect, useState } from 'react';

function AboutYourDog({ data, onSetInputs }) {

  const [getDogs, setDogs] = useState([]);

  useEffect(() => {
    setDogs(data);
    //addDog();
  }, [data]);

  useEffect(() => {
    if (getDogs?.length === 0) {
      //addDog();
    }
  }, [getDogs]);

  var isComplete = false;
  if (getDogs?.length > 0) {
    let validDogs = getDogs.filter(dog =>
      dog.name?.length > 0
      && dog.breed?.length > 0 && dog.breed !== 'Please select'
      && dog.size?.length > 0 && dog.size !== 'Please select'
      && dog.canBeOffLead?.length > 0 && dog.canBeOffLead !== 'Please select');

    if (validDogs.length === getDogs.length) {
      isComplete = true;
    }
  }
  onSetInputs(isComplete);

  function updateDog(dog) {
    var dogs = Array.from(getDogs);
    var index = dogs.findIndex(x => x.id === dog.id);
    dogs[index].name = dog.name
    dogs[index].breed = dog.breed
    dogs[index].size = dog.size
    dogs[index].canBeOffLead = dog.canBeOffLead
    dogs[index].comments = dog.comments

    setDogs(dogs);
  }

  function addDog() {

    var newId;
    var dogs = getDogs;
    if (dogs === undefined || dogs === null) {
      dogs = [];
    }
    newId = Math.max(...dogs.map(x => x.id)) + 1;
    var newDog = { id: newId, name: '', breed: 'Please select', size: 'Please select', canBeOffLead: 'Please select', comments: '' }
    setDogs([newDog, ...dogs]);
  }

  function removeDog(dogId) {
    var newDogs = getDogs.filter(dog => dog.id !== dogId);
    setDogs(newDogs);
  }

  return (
    <>
      <Row className="mb-2">
        <Col xs={3}>
          <Button variant="primary" size='sm' onClick={addDog}>Add new dog</Button>
        </Col>
      </Row>

      {getDogs?.map(dog =>
        <Dog key={dog.id} dog={dog} showRemoveButton={getDogs.length > 1} removeDog={removeDog} updateDog={updateDog} />
      )
      }

    </>
  );
}

export default AboutYourDog;
