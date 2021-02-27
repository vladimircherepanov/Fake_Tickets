import { useSelector, useDispatch } from "react-redux";
import { clearTicket } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const flightData = useSelector((state) => state.flightData.flightData);

  const ticket_id = useSelector((state) => state.inputs.ticket_id);

  const flight = flightData.data;
  console.log("flight", flight);

  if (ticket_id) {
    return (
      <div className="ticketForm">
        <div className="headerTicketForm">
          <div className="row">
            <div className="col" onClick={() => dispatch(clearTicket())}>
              <h5 className="backButton">Back to results</h5>
            </div>
            <div className="col"></div>
          </div>
          <hr />
        </div>
        <h1>xxxx</h1>
        <h1>xxxx</h1>
        <h1>xxxx</h1>
      </div>
    );
  } else {
    return null;
  }
};
