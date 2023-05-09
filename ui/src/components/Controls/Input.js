import { Form } from 'react-bootstrap';

function Input(props) {

    return (
        <Form.Control
            size='sm'
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
}

export default Input;
