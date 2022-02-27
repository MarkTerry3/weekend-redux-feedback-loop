import { useHistory } from 'react-router-dom';
import './Success.css';



function Success() {

    const history = useHistory();

    const newFeedback = () => {
        history.push('/');
    }

    return(
        <>
            <div className="top">
            <h3>thanks...I guess</h3>
            </div>

            <div className="bottom">
            <button onClick={newFeedback}>Leave New Feedback!</button>
            </div>
        </>
    )
}// end Success


export default Success;