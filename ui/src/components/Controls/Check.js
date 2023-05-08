import Form from 'react-bootstrap/Form';

function Select(props) {

    return (
        <Form.Check
            type="switch"
            label={props.isOn ? props.onText : props.offText}
            defaultChecked={props.defaultChecked}
            onClick={props.onClick}
        />
    );
}

export default Select;
