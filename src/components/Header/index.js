// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = () => {
  const onClickHamburger = () => {}

  return (
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger" onClick={onClickHamburger} />
          </button>
        }
      >
        {close => (
          <ul className="popup-card">
            <li className="popup-home">
              <AiFillHome className="home-icon" />
              <Link to="/">
                <h1 className="home-heading">Home</h1>
              </Link>
            </li>
            <li className="popup-home">
              <BsInfoCircleFill className="home-icon" />
              <Link to="/about">
                <h1 className="about-heading">About</h1>
              </Link>
            </li>
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
          </ul>
        )}
      </Popup>
    </div>
  )
}

export default Header
