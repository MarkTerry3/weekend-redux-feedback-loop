import { useHistory } from 'react-router-dom';
import './Success.css';



function Success() {
    // so you can push them to the next page
    const history = useHistory();

    const newFeedback = () => {
        history.push('/');
    }

    return(
        <>
            <div className="top">
            <h3>Thank you for your feedback!</h3>
            </div>

            <div className="bottom">
            <button onClick={newFeedback}>Leave New Feedback!</button>
            </div>
        </>
    )
}// end Success


export default Success;