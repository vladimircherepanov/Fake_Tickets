import {
  GET_FROM,
  GET_TO,
  GET_DATE_ONE_WAY,
  GET_DATES,
  GET_CURRENCY,
  GET_TICKET,
  CLEAR_TICKET
} from "../redux/types";

const initialState = {
  from: "",
  to: "",
  date_from: "",
  date_to: "",
  currency: "USD",
  ticket_id: ""
};

export const inputsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FROM:
      return {
        ...state,
        from: action.payload
      };

    case GET_TO:
      return {
        ...state,
        to: action.payload
      };

    case GET_DATE_ONE_WAY:
      return {
        ...state,
        date_from: action.payload,
        date_to: ""
      };

    case GET_DATES:
      return {
        ...state,
        date_from: action.payload.from,
        date_to: action.payload.to
      };

    case GET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    case GET_TICKET:
      return {
        ...state,
        ticket_id: action.payload
      };

    case CLEAR_TICKET:
      return {
        ...state,
        ticket_id: null
      };

    default:
      return state;
  }
};
