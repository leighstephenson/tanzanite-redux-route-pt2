import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Review () {

    const dispatch = useDispatch();
    const history = useHistory(); //!only available to components inside of components
    const personName = useSelector(store => store.personName);
    const activityType = useSelector(store => store.activityType);
    const minutes = useSelector(store => store.minutes);
    const miles = useSelector(store => store.miles);
   
    const sendToServer = () => {
        axios.post('/activity', {
            name: personName,
            type: activityType,
            minutes: minutes,
            miles: miles,
        }).then(response => {
            //TODO Clear inputs
            dispatch({type: 'CLEAR_FORM'});
            //TODO Navigate to the list view
            history.push('/activity-list');
        }).catch(error => {
            alert('something went wrong in POST');
            console.log(error);
        })
    }
   
    return(
        <>
            <h3> Review </h3>
            <div> Name: {personName} </div>
            <div> Type: {activityType} </div>
            <div> Minutes: {minutes} </div>
            <div> Miles: {miles} </div>
            <button onClick={sendToServer}>Submit </button>

        </>
    )

}//End Review()

export default Review;