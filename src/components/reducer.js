export const initialState = {
    term: null,
}
export const actionTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM',
}
const reducer = (state, action) => action.type === actionTypes.SET_SEARCH_TERM ? {...state, term:action.term} : state

export default reducer
