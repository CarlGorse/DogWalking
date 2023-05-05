import SelectRow from './Components/SelectRow';

function CanBeLetOffLead(props) {

  return (
    <SelectRow
      label='Can be let off the lead?'
      inputHint='Can your dog be left off the lead in a park or countryside?'
      baseProps={props.baseProps}
      propertyName='canBeOffLead'
      options={<>
        <option>Please select</option>
        <option>Either</option>
        <option>Countryside only</option>
        <option>Park only</option>
        <option>No</option>
      </>
      }
    />
  )
}

export default CanBeLetOffLead;
