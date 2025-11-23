import "./CustomHeader.css"
import { Link } from 'react-router'

export default function CustomHeader() {

  return (
    <>
      <nav className='NavigationBar'>
        <img src='./src/assets/NavigationBarLogo.png' />

        <h1><b>Film and Series Review <br />Hub</b> </h1>

        <div className='NavLinks'>
          <li> <Link to='/'> Home              </Link> </li>
          <li> <Link to="/"> Shows             </Link></li>
          <li> <Link to="/accounts"> Accounts  </Link> </li>
          <li> <Link to="/"> Movies            </Link> </li>
          <li> <Link to="/Settings"> Settings  </Link> </li>
          <li> <Link to="/"> WatchList         </Link> </li>
        </div>
      </nav>
    </>
  )
}