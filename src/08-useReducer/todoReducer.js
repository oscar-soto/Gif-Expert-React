export const todoReducer = (initalState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      // throw new Error('Action.type = ABC no esta implementada');
      return [...initalState, action.payload];
      
    default:
      return initalState;
  }
};