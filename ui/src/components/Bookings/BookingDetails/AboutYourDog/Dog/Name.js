import InputRow from 'components/Controls/InputRow';

function Name(props) {

  return (
    <InputRow
      label='Name'
      baseProps={props.baseProps}
      propertyName='name'
      placeholder="Your dog's name"
    />
  )
}

export default Name;
