import { Link, Outlet } from "react-router-dom"
import { AccountWrapper } from "../styles/AccountStyles"

const Account = () => {
  return (
    <AccountWrapper>
      <div className="account-header">
        <p>Sign in to your existing account or create a new one for a faster checkout, seamless payment, saving your favorite products, and so much more.</p>
        <div className="link">
          <Link to="/account"><h4>Sign in</h4></Link>
           <div className="middle-bar"></div>
           <Link to="register"><h4>Create Account</h4></Link>
        </div>
      </div>

      <Outlet/>
    </AccountWrapper>
  )
}

export default Account