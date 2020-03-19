
import Link from 'next/link';

interface Props {
    img: string,
    heading: string,
    text1: string,
    text2: string,
    link: string
}
const text = {
    'color': '#4a5568'
}

const DashboardSelection: React.FC<Props>  = ({img, heading, text1, text2, link}) => (
    <div className="dashboard-selection">
        <Link href={link}>
            <a>
                <img src={img} alt={heading}/>
                <h2>{heading}</h2>
                <p>{text1}</p>
                <p>{text2}</p>
            </a>
        </Link>
    </div>
);
  
export default DashboardSelection;