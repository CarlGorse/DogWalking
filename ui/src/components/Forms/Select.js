import Form from 'react-bootstrap/Form';

function Select(props) {

    return (
        <Form.Select
            size='sm'
            value={props.defaultValue}
            onChange={props.onChange}>
            {props.options}
        </Form.Select>
    );
}

export default Select;
