export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'PLUS':
            return state + action.payload.num
        case 'MINUS':
            return state - action.payload.num
        case 'RESET':
            return (state = action.payload.num)
        default:
            return state
    }
}
