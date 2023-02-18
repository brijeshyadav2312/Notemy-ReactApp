let STATE = [];

function addNoteReducer(state = STATE, action){
    switch(action.type){
        case 'ADD_NOTES':
            return [action.notes, ...state]
        case 'DEL_NOTES':
            return state.filter((_,idx) => idx!==action.id)
        case 'UPDATE_NOTES':
            return state.map((elem,idx) => idx===(Number(action.id))?(elem=action.data):(elem));
        case 'CLEAR_NOTES':
                return state = STATE;
        default:
            return state;
    }
}

export default addNoteReducer