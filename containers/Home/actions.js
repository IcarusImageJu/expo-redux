import { LOADED_LIST, LOAD_LIST } from './constants';
import { client } from '../../utils/apollo';
import { getCurrencyName } from './queries';

export function loadList() {
    return async (dispatch) => {
        try {
            // Call our request helper (see 'utils/request')
            const { data } = await client.query(getCurrencyName)
            console.log(data.rates);
            dispatch(loadedList(data.rates))
        } catch (err) {
            console.log(err);
        }
    }
}

export function loadedList(list) {
    return{
        type: LOADED_LIST,
        list,
    }
}