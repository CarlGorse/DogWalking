import Form from 'react-bootstrap/Form';

function Select(props) {

    return (
        <Form.Select
            size='sm'
            defaultValue={props.defaultralue}
            onChange={props.onChange}>
            {props.options}
        </Form.Select>
    );
}

export default Select;
