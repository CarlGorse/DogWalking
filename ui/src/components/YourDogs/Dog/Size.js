import SelectRow from 'components/Controls/SelectRow';

function Size(props) {

  return (
    <SelectRow
      label='Size'
      baseProps={props.baseProps}
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
