
import Link from 'next/link';

interface Props {
    img: string,
    heading: string,
    text1: string,
    text2: string,
    link: string
}
const selection = {
    width: '15rem',
    height: '25rem',
    border: '1px solid #ccc',
    'border-radius': '1rem',
    'text-align': 'center',
    'padding': '1rem 0.5rem'
}
//170x130
const DashboardSelection: React.FC<Props>  = ({img, heading, text1, text2, link}) => (
    <div style={selection}>
        <Link href={link}>
            <a className="task-list-item-title">
                <img src={img} alt={heading}/>
                <h2>{heading}</h2>
                <p>{text1}</p>
                <p>{text2}</p>
            </a>
        </Link>
    </div>
);
  
export default DashboardSelection;