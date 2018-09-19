export default function messages(state = {}, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
    return [
      ...state,
      {
        text: action.text,
      }
    ]
    default:
    return state
  }
}
