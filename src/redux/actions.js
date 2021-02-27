import {
  LOAD_FLIGHT_DATA,
  HIDE_LOADER,
  SHOW_LOADER,
  GET_FROM,
  GET_TO,
  GET_DATE_ONE_WAY,
  GET_DATES,
  GET_CURRENCY,
  GET_TICKET,
  CLEAR_TICKET
} from "./types";

import { formatDate } from "../components/utils/formatDate";

export function fromAirport(from) {
  return { type: GET_FROM, payload: from };
}

export function toAirport(to) {
  return { type: GET_TO, payload: to };
}

export function getDateOneWay(payload) {
  return { type: GET_DATE_ONE_WAY, payload: payload };
}

export function getDates(to, from) {
  return { type: GET_DATES, payload: { to, from } };
}

export function getCurrency(currency) {
  return { type: GET_CURRENCY, payload: currency };
}

export function getTicket(ticket_id) {
  return { type: GET_TICKET, payload: ticket_id };
}

export function clearTicket() {
  return { type: CLEAR_TICKET };
}

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

export function loadFlightData(
  fromAirport,
  toAirport,
  arrivalDate,
  returnDate,
  current_locale,
  currency
) {
  const returnDateCalc = () => {
    if (returnDate) {
      return "&date_to=" + formatDate(returnDate).toString();
    } else {
      return "";
    }
  };

  const arrivalDateCalc = () => {
    if (arrivalDate) {
      return "&date_from=" + formatDate(arrivalDate).toString();
    } else {
      return "&date_from=" + formatDate(new Date());
    }
  };

  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      "https://api.skypicker.com/flights?flyFrom=" +
        fromAirport +
        "&to=" +
        toAirport +
        arrivalDateCalc() +
        returnDateCalc() +
        "&partner=picky&v=3&locale=" +
        current_locale +
        "&curr=" +
        currency
    );
    const json = await response.json();
    setTimeout(() => {
      dispatch({ type: LOAD_FLIGHT_DATA, payload: json });
      dispatch(hideLoader());
    }, 15);
  };
}
