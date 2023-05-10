import SelectRow from 'components/Controls/SelectRow';

function Breed(props) {

  return (
    <SelectRow
      label='Breed'
      baseProps={props.baseProps}
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
