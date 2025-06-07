import { Link} from "react-router-dom"
import { ErrorWrapper } from "../styles/ErrorStyles"
import ErrorImg from '../assets/not-found.svg'
const Error = () => {
  return (

    <ErrorWrapper>
        <div>
         <img src={ErrorImg} alt="Not Found" />
         <h3>Ouch!!! Page Not Found</h3>
         <p>Sorry, the page you are looking for does not exist</p>
         <Link to='/' className="error-btn">Back Home</Link>
      </div>
    </ErrorWrapper>
    
  )
}

export default Error

// protectedRouter