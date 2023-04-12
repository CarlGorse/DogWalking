import BaseInput from './Components/BaseInput';

function Comments(props) {

  return (

    <BaseInput
      label='Comments'
      dog={props.dog}
      updateDog={props.updateDog}
      propertyName='comments'
      placeholder="e.g. any relevent behaviours"
    />

  )
}

export default Comments;