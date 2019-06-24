import { LOADED_LIST, LOAD_LIST } from './constants';

export function loadList() {
    console.log('ok')
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