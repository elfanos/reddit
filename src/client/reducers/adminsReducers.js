/**
 * Created by Rasmus on 2018-07-04.
 */
import { FETCH_ADMINS } from '../actions/index';

export default ( state = [], action ) => {
   // console.log("action?", action.payload);
    switch (action.type) {
        case FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
}