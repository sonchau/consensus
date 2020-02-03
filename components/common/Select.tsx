interface SelectData {
    name: string,
    value: string
}
interface Props {
    name: string,
    values: string[],
    defaultValue?: string,
    onChange?: (e: React.FormEvent<HTMLSelectElement>) => void 
    className?: string,
    dataId?: number,
}

const selectStyle = {
    'fontSize': 'inherit'
}

const Select:  React.FC<Props> = ({name, values, defaultValue, onChange, 
    className, dataId}) => {
    return (
        <select title="aaa"  data-id={dataId} style={selectStyle} name={name} 
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

