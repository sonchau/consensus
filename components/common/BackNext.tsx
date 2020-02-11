
import Link from 'next/link';
import React, {forwardRef} from 'react';

interface Props {
    backHref: string,
    nextHref: string,
    asBackHref?: string,
    asNextHref?: string,
}

const BackNext:  React.FC<Props> = ({backHref, nextHref, asBackHref, asNextHref}) => (
<div className="backnext" >
    <Link href={backHref} as={asBackHref !== '' ? asBackHref : ''}>
        <a className="button back medium"></a>
    </Link>
    <Link href={nextHref} as={asNextHref !== '' ? asNextHref : ''} >
        <a  className="button next medium last"></a>
    </Link>
</div>
);
  
export default BackNext;