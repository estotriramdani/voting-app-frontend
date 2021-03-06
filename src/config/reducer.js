const initialState = {
  pathName: window.location.pathname,
  isFormShow: false,
  whichForm: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_SHOWMODAL') {
    return {
      ...state,
      isFormShow: action.value,
      whichForm: action.form,
    };
  }

  if (action.type === 'CHANGE_PATHNAME') {
    return {
      ...state,
      pathName: action.value,
    };
  }
  return state;
};

export default reducer;
