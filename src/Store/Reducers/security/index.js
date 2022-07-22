const defaultValue = {
    user: null,
    isLoading: false,
    token: null,
    error: null,
  }
  
  const reducer = (state = defaultValue, action = { type: "NONE", payload: null }) => {
    const { type, payload } = action;
    switch (type) {
      case "LOGIN_LOADING":
        return {
          ...state,
          isLoading: true
        }
      case "LOGIN_SUCCESS":
        // TODO: add user data in endpoint and assign to user
        return {
          ...state,
          isLoading: false,
          error: null,
          token: payload.token,
          user: payload.usuario
        }
      case "LOGIN_FAILED":
        return {
          ...state,
          isLoading: false,
          token: null,
          error: payload
        }
      case "LOGIN_CLEAN_ERROR":
        return {
          ...state,
          error: null
        }
      default: return state;
    }
  }
  
  export default reducer;
  