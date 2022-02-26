import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function ReviewFeedback() {


    const feelingReducer = useSelector(store => store.feelingReducer);
    const understandingReducer = useSelector(store => store.understandingReducer);
    const supportReducer = useSelector(store => store.supportedReducer);
    const commentsReducer = useSelector(store => store.commentsReducer);


    const history = useHistory();


function postServer() {
    console.log({feelingReducer, understandingReducer, supportReducer, commentsReducer});
    axios.post('/submit', {feelingReducer, understandingReducer, supportReducer, commentsReducer})
    .then(response => {
      // empty
      console.log('help');

      history.push('/success');
      // do our GET

    })
    .catch(error => {
      console.log('error POST', error);
      alert('Error POSTing');
    })
}



    return(
        <>
            <h1>Review Your Feedback</h1>
            <p>Feeling: {feelingReducer}</p>
            <p>Understanding: {understandingReducer}</p>
            <p>Support: {supportReducer}</p>
            <p>Comments: {commentsReducer}</p>

            <button onClick={postServer}>Submit</button>
        </>
    )
}




export default ReviewFeedback;