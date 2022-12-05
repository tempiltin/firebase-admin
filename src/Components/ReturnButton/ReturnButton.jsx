import { Link } from 'react-router-dom'
import {GrLinkNext} from "react-icons/gr";
const ReturnButton = ({task}) => {
  return <Link className='returnButton' to={"#navTop"} onClick={ task}>
    <GrLinkNext />
  </Link>
}
export default ReturnButton;