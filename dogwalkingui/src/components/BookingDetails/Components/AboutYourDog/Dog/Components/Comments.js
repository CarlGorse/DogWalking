import Input from './Components/InputRow';

function Comments(props) {

  return (

    <Input
      label='Comments'
      dog={props.dog}
      updateDog={props.updateDog}
      propertyName='comments'
      placeholder="e.g. any relevent behaviours"
    />

  )
}

export default Comments;