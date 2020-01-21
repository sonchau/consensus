
import Link from 'next/link';

interface Props {
    backHref: string,
    nextHref: string,
    asBackHref?: string,
    asNextHref?: string
}
const backnext = {
    display: 'grid',
    'gridTemplateColumns': '1fr 1fr',
    'margin': '1rem 0'

};
const last = {
    'justifySelf': 'end'
}
  
const BackNext:  React.FC<Props> = ({backHref, nextHref, asBackHref, asNextHref}) => (
<div style={backnext} >
    <Link href={backHref} as={asBackHref !== '' ? asBackHref : ''}>
        <a className="button back medium"></a>
    </Link>
    <Link href={nextHref} as={asNextHref !== '' ? asNextHref : ''}>
        <a style={last} className="button next medium"></a>
    </Link>
</div>
);
  
  export default BackNext;