import BaseSelect from './Components/BaseSelect';

function Size(props) {

  return (
    <BaseSelect
      label='Size'
      dog={props.dog}
      updateDog={props.updateDog}
      propertyName='size'
      options={<>
        <option>Please select</option>
        <option>Toy</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </>
      }
    />
  )
}

export default Size;
