interface Props {
    name: string,
    values: string[],
    defaultValue?: string,
    onChange?: (e: React.FormEvent<HTMLSelectElement>) => void 
    className?: string,
}

const selectStyle = {
    'fontSize': 'inherit'
}

const Select:  React.FC<Props> = ({name, values, defaultValue, onChange, className}) => {
    return (
        <select style={selectStyle} name={name} 
        onChange={onChange} defaultValue={defaultValue}
        className={className}>
            { values.map( (item, index) => {
                return (<option value={item}
                            key={index}
                        > {item} </option>)
            })}
        </select>
    )
}
export default Select;

