import Form from 'react-bootstrap/Form';

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
