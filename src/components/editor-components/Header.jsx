import { Link } from "react-router-dom";
import './HeaderStyles.css'
const Header = () => {
  return (
    <div className="flex justify-center" style={{boxShadow:'0 5px 15px 0 rgba(0,0,0)', borderRadius:'13px', background:'#fff',marginLeft:'13px'}}>
    <div className='flex justify-center gap-2 w-fit'>
      <div className='logo'>
        <Link to='/'>
          <img src='src\assets\sql-server.png' width='50vw' height='100%' alt='atlan logo' />
        </Link>
      </div>
      <div className="heading text-2xl font-bold m-auto" style={{marginRight:'400px'}}>
      SQL Query Runner
      </div>
      <ul className="nav-menu">
                <a href="
                /"><li className='button-24 li-button1' style={{
                  border: '1.5px solid #545454',
                  color: '#545454',
                  fontWeight:'700'
              }}>
                Home   
            </li></a>
                <a href="/editor1">
                <li  className='button-24 li-button2'style={{
                  border: '1.5px solid #545454',
                  color: '#545454',
                  fontWeight:'700'
              }}>
                    Editor 1
                </li>
                </a>
                
                <a href="/editor2">
                <li  className='button-24 li-button3'style={{
                  border: '1.5px solid #545454',
                  color: '#545454',
                  fontWeight:'700'
              }}>
                    Editor 2
                </li>
                </a>
                </ul>
    </div>
    </div>

  );
};

export default Header;
