
interface Props {
    name: string,
    placeholder: string,
    value: string,
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void 
}
const style = {
    'border': '1px solid #e2e8f0',
    'borderRadius': '1rem',
    'outline': 'none',
    padding: '1rem',
    width: '100%',
    'fontSize': 'inherit'
};

const Input:  React.FC<Props> = ({name, placeholder, value, onChange}) => (
    <input
            style={style}
            type="text"
            name={name}
            placeholder={placeholder}
            autoComplete="off"
            value={value}
            onChange={onChange}
    />
);
  
  export default Input;