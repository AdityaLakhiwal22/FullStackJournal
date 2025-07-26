import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../layouts/layout.css';
function Sidebar(){
    return(
        <div id="sidebar">
            <div className="logo">
                <img src={logo} height="50" alt='logo' title='React'></img>
                 <span className="logo-text" height='50' color='white'>React Mail</span>
            </div>
            <div>
                <Link className='link' to='/'>Inbox</Link>
            </div>
            <div>
                <Link className='link' to='/sent'>Sent</Link>
            </div>
        </div>
            
    
    ); 
}
export default Sidebar;
