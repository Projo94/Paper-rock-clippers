const initState = {
  items: {},
  loading: false,
  error: null,
  status: "",
  result: ""
};

const postsReducer = (state = initState, action) => {
  console.log("Action on", action.type);

  switch (action.type) {
    case "FETCH_ELEMENTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_ELEMENTS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case "FETCH_ELEMENTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default postsReducer;
