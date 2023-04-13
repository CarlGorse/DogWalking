import InputRow from './Components/InputRow';

function Comments(props) {

  return (
    <InputRow
      label='Comments'
      baseProps={props.baseProps}
      propertyName='comments'
      placeholder="e.g. any relevent behaviours"
    />
  )
}

export default Comments;