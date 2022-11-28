import {AppTitle} from "../Components/Const/Const"
const Helmet = (props) => {
  console.log(props.title)
    document.title = AppTitle + props.title
    return <div className='w-100'>{props.children}</div>
  }
  export default Helmet;