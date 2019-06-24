import { LOADED_LIST, LOAD_LIST } from './constants';


export function loadList() {
    return{
        type: LOAD_LIST,
    }
}

export function loadedList(list) {
    return{
        type: LOADED_LIST,
        list,
    }
}