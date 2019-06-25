import { LOADED_LIST, LOAD_LIST } from './constants';
import request from '../../utils/request';


export function loadList() {
    return async (dispatch) => {
        const requestURL = `https://api.github.com/users/IcarusImageJu/repos?type=all&sort=updated`;
        try {
            // Call our request helper (see 'utils/request')
            const repos = await request(requestURL);
            dispatch(loadedList(repos))
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