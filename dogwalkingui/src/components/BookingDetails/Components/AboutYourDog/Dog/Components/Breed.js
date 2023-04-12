import BaseSelect from './Components/BaseSelect';

function Breed(props) {

  return (
    <BaseSelect
      label='Breed'
      dog={props.dog}
      updateDog={props.updateDog}
      propertyName='breed'
      options={<>
        <option>Please select</option>
        <option>Cockapoo</option>
        <option>King Charles</option>
        <option>Labrador</option>
        <option>Spaniel</option>
        <option>Other</option>
      </>
      }
    />
  )
}

export default Breed;
