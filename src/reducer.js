export const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'Plus':
            return state + action.payload.item
        case 'Minus':
            return state - action.payload.item
        default:
            return state
    }
}
