const GET_MESSAGE = 'GET_MESSAGE';
const url = 'http://localhost:3000/api/greetings';

const initialState = {
  greeting: 'Hi',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE':
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
};

const getMessage = (message) => ({
  type: GET_MESSAGE,
  payload: message,
});

export const fetchMessage = (dispatch) => {
  console.log('GetMessage(), Action!!');
  return fetch('api/greetings')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      dispatch(getMessage(json));
    })
    .catch((error) => console.log(error));
}