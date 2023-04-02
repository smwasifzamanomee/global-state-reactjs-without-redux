export const initialState = {
    home: 10,
    work: 20,
}

export const reducer = (state, action) => {

    switch (action.type) {
        case 'home':
            return {
                ...state,
                home: state.home + action.value,
            }
        case 'work':
            return {
                ...state,
                work: state.work + action.value,
            }
        default:
            return state
    }
}