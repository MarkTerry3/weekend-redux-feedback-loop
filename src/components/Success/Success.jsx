import { useHistory } from 'react-router-dom';



function Success() {

    const history = useHistory();

    const newFeedback = () => {
        history.push('/');
    }

    return(
        <>
            <h3>thanks...I guess</h3>
            <button onClick={newFeedback}>Leave New Feedback!</button>
        </>
    )
}// end Success


export default Success;