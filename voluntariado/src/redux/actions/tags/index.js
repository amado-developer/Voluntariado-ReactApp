import * as types from '../../types/tags';

export const addTag = (tag, id) => ({
    type: types.TAG_ADDED,
    payload: {tag, id}
});

export const removeTag = id => ({
    type: types.TAG_DELETED,
    payload: {id}
})

