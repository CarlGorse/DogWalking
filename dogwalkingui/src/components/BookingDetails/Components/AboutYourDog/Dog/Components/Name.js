import Input from './Components/InputRow';

function Name(props) {

  return (

    <Input
      label='Name'
      dog={props.dog}
      updateDog={props.updateDog}
      propertyName='name'
      placeholder="Your dog's name"
    />

  )
}

export default Name;
