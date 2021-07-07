export const plus = (count) => {
    return { type: 'PLUS', payload: { num: count } }
}
export const minus = (count) => {
    return { type: 'MINUS', payload: { num: count } }
}
export const reset = (count) => {
    return { type: 'RESET', payload: { num: count } }
}
