import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center'
  };

  const linkStyle = {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/services">Services</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}
export default Navbar;
