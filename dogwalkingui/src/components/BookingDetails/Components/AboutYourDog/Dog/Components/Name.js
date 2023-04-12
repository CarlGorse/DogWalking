import BaseInput from './Components/BaseInput';

function Name(props) {

  return (

    <BaseInput
      label='Name'
      dog={props.dog}
      updateDog={props.updateDog}
      propertyName='name'
      placeholder="Your dog's name"
    />

  )
}

export default Name;
