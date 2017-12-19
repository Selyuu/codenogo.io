const initialState = {
  cards: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARDS':
    return {
      ...state,
      cards: [
        ...action.cards,
      ]
    }
    default:
    return state
  }
}