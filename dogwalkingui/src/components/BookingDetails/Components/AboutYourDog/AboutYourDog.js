import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dog from './Dog/Dog';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function AboutYourDog(props) {

  const [getDogs, setDogs] = useState([]);

  useEffect(() => {
    setDogs([]);
    addDog();
  }, []);

  var isComplete = false;
  console.log(getDogs);
  if (getDogs?.length > 0) {

    let validDogs = getDogs.filter(dog =>
      dog.name?.length > 0
      && dog.breed != 'Please select'
      && dog.size != 'Please select'
      && dog.canBeOffLead != 'Please select');

    if (validDogs.length == getDogs.length) {
      isComplete = true;
    }
  }
  props.onSetInputs(isComplete);

  function updateDog(dog) {
    var dogs = Array.from(getDogs);
    var index = dogs.findIndex(x => x.id == dog.id);
    dogs[index].name = dog.name
    dogs[index].breed = dog.breed
    dogs[index].size = dog.size
    dogs[index].canBeOffLead = dog.canBeOffLead
    dogs[index].comments = dog.comments

    setDogs(dogs);
  }

  function addDog() {

    var newId;
    if (getDogs.length == 0) {
      newId = 0;
    }
    else {
      newId = Math.max(...getDogs?.map(x => x.id)) + 1;
    }
    var newDog = { id: newId, name: '', breed: 'Please select', size: 'Please select', canBeOffLead: 'Please select', comments: '' }
    setDogs([newDog, ...getDogs]);
  }

  function removeDog(dogId) {
    var newDogs = getDogs.filter(dog => dog.id != dogId);
    setDogs(newDogs);
  }

  return (
    <>
      <Row className="mb-2">
        <Col xs={3}>
          <Button variant="primary" size='sm' onClick={addDog}>Add new dog</Button>
        </Col>
      </Row>

      {getDogs.map(dog =>
        <Dog key={dog.id} dog={dog} showRemoveButton={getDogs.length > 1} removeDog={removeDog} updateDog={updateDog} />
      )
      }

    </>
  );
}

export default AboutYourDog;