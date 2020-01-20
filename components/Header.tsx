
import Link from 'next/link';

const header = {
    background: '#0C3D56',
    display: 'grid',
    'gridTemplateColumns': '1fr 1fr',
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
        <a style={header__logo} href="https://geografia.com.au">
            <img src="/geografia-logo.png" alt="Logo" />
        </a>
    </div>
  );
  
  export default Header;