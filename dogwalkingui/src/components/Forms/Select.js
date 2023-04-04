import Input from 'components/Forms/Input';

function Select(props) {

    return (
        <Input defaultValue={props.defaultralue} onChange={props.onChange}>
            {props.options}
        </Input>
    );
}

export default Select;
