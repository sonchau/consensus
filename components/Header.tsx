
import Link from 'next/link';

const header = {
    background: '#0C3D56',
    display: 'grid',
    'grid-template-columns': '1fr 1fr',
    padding: '1rem'
  };
const header__text = {
    'fontSize': '3rem',
    color: 'white',
    'align-self': 'center'
}  

const header__logo = {
    'gridColumnEnd': 'none'
}
  
  const Header: React.FC  = () => (
    <div style={header} >
        <Link href="/">
            <a style={header__text}>Consensus</a>
        </Link>
        <Link href="https://geografia.com.au">
            <a style={header__logo}>
                <img src="/geografia-logo.png" alt="Logo" />
            </a>
        </Link>
    </div>
  );
  
  export default Header;