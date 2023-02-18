export function addNote(notes){
    return {
        type: 'ADD_NOTES',
        notes: notes
    }
}

export function delNote(id){
    return {
        type: 'DEL_NOTES',
        id: id
    }
}

export function updateNote(data,id){
    return {
        type: 'UPDATE_NOTES',
        data: data,
        id: id
    }
}
export function clearNote(){
    return {
        type: 'CLEAR_NOTES',
    }
}

export function themeTogle(){
    return {
        type: 'THEME_CHANGE',
    }
}