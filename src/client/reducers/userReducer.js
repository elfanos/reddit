/**
 * Created by Rasmus on 2018-07-03.
 */
import { FETCH_USERS } from '../actions';

export default ( state = [], action ) => {
    switch ( action.type ) {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
}