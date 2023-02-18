let THEME = false;
export function themeReducer (theme = THEME, action){
    switch (action.type) {
        case 'THEME_CHANGE':
            return !theme;
        default:
            return theme;
    }
}