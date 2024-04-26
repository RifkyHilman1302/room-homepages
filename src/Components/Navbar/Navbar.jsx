import './Navbar.css'
import iconsBars from '../../Assets/images/icon-hamburger.svg'
import iconsClose from '../../Assets/images/icon-close.svg'
import { useRef } from 'react'

const Navbar = () => {
    const navBtn = useRef(null)
    const barsClicked = () => {
        navBtn.current.style.display = 'flex'
    }
    const closeClicked = () => {
        navBtn.current.style.display = 'none'
    }

    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <div className="navbar-title">
                    <img src={iconsBars} onClick={barsClicked} alt="" className='icons-bars'/>
                    <p className='nav-title'>room</p>
                </div>
                <div className="navbar-btn" ref={navBtn}>
                    <div className="icons-close">
                        <img src={iconsClose} alt=""  onClick={closeClicked} className='icons-closee'/>
                    </div>
                    <div className="btn-nav">
                        <button>home</button>
                        <button>shop</button>
                        <button>about</button>
                        <button>contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar