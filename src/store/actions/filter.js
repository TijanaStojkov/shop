import * as actionTypes from './actionTypes';

export const filterSize = (size) => {
    return {
        type: actionTypes.FILTER_SIZE, 
        size: size
    }
}