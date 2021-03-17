import Axios from "axios";
import elementsArray from "./../data/dataElements";

//GET ELEMENTS PSR function middleware
export const getSelectionElements = (param) => async (dispatch, getState) => {
  console.log("Logging", param);
  dispatch({ type: "FETCH_ELEMENTS_REQUEST" });

  try {
    dispatch({ type: "FETCH_ELEMENTS_SUCCESS", payload: elementsArray });
  } catch (error) {
    dispatch({ type: "FETCH_ELEMENTS_FAILURE", error });
  }
};


//SELECT ELEMENTS PSR function middleware
export const postResult = (param) => async (dispatch, getState) => {
    console.log("Logging", param);
    try {
      dispatch({ type: "SELECT_ELEMENTS_SUCCESS", payload: elementsArray });
    } catch (error) {
      dispatch({ type: "SELECT_ELEMENTS_FAILURE", error });
    }
  };


