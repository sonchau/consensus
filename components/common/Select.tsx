interface Props {
    name: string,
    values: string[],
    selectedItem?: string,
    onChange?: (e: React.FormEvent<HTMLSelectElement>) => void 
}

const select = {
    'fontSize': 'inherit'
}

const Select:  React.FC<Props> = ({name, values, selectedItem, onChange}) => {
    return (
        <select style={select} name={name} onChange={onChange}>
            { values.map( item => {
                return (<option value={item}
                            selected={selectedItem === item ? true : false}
                        > {item} </option>)
            })}
        </select>
    )
}
export default Select;

