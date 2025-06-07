import { Link, NavLink} from "react-router-dom"
import { NavbarWrapper } from "../styles/NavbarStyles"
import { NavIcons, NavLinkOne, NavLinkTwo, Socials } from "../utils/utils"
import LinkComponent from "./LinkComponent"
import {useDispatch, useSelector} from "react-redux"
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { toggleNavMenu } from "../features/ui/uiSlice"
import { logoutUser } from "../features/auth/authSlice"



const Navbar = () => { 
  
  
   const {user} = useSelector(store => store.auth)
   const {numberOfCartItems} = useSelector(store => store.cart)
   const {navMenu} = useSelector(store => store.ui)

   const dispatch = useDispatch()
  
   const signedUser = user?.name.split(' ')[0]
  
   const handleMobileNav = (e) => {
    
    const classList = e.target.classList
    if(classList.contains('logo') || classList.contains('link') || classList.contains('other-link') || classList.contains('logout-btn')){
       dispatch(toggleNavMenu())
    }
   }
 
  
  return (
    <NavbarWrapper>
      <section className="nav-top">
        
        <div className="nav-row-one nav-layout">
           {NavLinkOne.map(item => {
            
            const {id, text, link} = item
            if((!user && text === 'Admin') || (user?.role !== 'admin' && text === 'Admin'))  return null
            
            return <NavLink key={id} to={link} className='link'>{text}</NavLink>
           })}
          {user && <h5>Welcome, <span>{signedUser.length > 7 ? signedUser.substring(0,7) : signedUser}</span></h5>}
        </div>
      </section>

      <section className="nav-down">
          <div className="nav-row-two nav-layout">
           
           <button type="button" className="menu-btn" onClick={()=> dispatch(toggleNavMenu())}><IoIosMenu className="icon"/></button>

            <div className={navMenu?"mobile-nav-content active":"mobile-nav-content"} onClick={handleMobileNav}>
              <div className="mobile-nav">
                <Link to='/'>
                 <h4 className="logo">Pluto Store</h4>
                </Link>
                <button type="button" className="close-btn" onClick={()=> dispatch(toggleNavMenu())}><IoCloseOutline/></button>
              {NavLinkTwo.map(item => {
                const {id, text,link} = item
                return <NavLink key={id} to={link} className='link'>{text}</NavLink>
              })}

              <div className="other-links">
                <Link to='/account' className="other-link">Login / Register</Link>
                <Link to="/faq" className="other-link">Questions?</Link>
                <Link to='/contact' className="other-link">Contact</Link>
                {user&& <button type="button" className="logout-btn" onClick={()=> dispatch(logoutUser())}>Logout</button>}
              </div>

              <div className="socials">
                {Socials.map(social => <Link key={social.id} className="social">{social.socialLink}</Link>)}
              </div>
             </div>

            </div>

           <div className="nav-start">
            <Link to='/'>
                 <h4 className="logo">Pluto Store</h4>
            </Link>
            
             <div className="nav-center">
              {NavLinkTwo.map(item => {
                const {id, text,link} = item
                return <NavLink key={id} to={link} className='link'>{text}</NavLink>
              })}
             </div>
           </div>

          <div className="nav-end">
            {NavIcons.map((item,index)=> {
              const {id, icon} = item
              
              return <LinkComponent key={id} icon={icon} link={item.link && item.link} index={index} />
            })}

            <div className="cart-badge"><span>{numberOfCartItems}</span></div>
           
            
          </div>
          </div>
      </section>
      
    </NavbarWrapper>
  )
}

export default Navbar