interface Props {
    name: string,
    values: string[],
    defaultValue?: string,
    onChange?: (e: React.FormEvent<HTMLSelectElement>) => void 
}

const selectStyle = {
    'fontSize': 'inherit'
}

const Select:  React.FC<Props> = ({name, values, defaultValue, onChange}) => {
    return (
        <select style={selectStyle} name={name} onChange={onChange} defaultValue={defaultValue}>
            { values.map( (item, index) => {
                return (<option value={item}
                            key={index}
                        > {item} </option>)
            })}
        </select>
    )
}
export default Select;

