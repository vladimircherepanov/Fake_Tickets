import { useSelector, useDispatch } from "react-redux";
import { clearTicket } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const flightData = useSelector((state) => state.flightData.flightData);
  const ticket_id = useSelector((state) => state.inputs.ticket_id);

  const flight = flightData.data.find((item) => item.id === ticket_id);
  console.log("flight", flight);

  return (
    <div className="ticketForm">
      <div className="headerTicketForm">
        <div className="row">
          <div className="col" onClick={() => dispatch(clearTicket())}>
            <h6 className="backButton">Back to results</h6>
          </div>
          <div className="col"></div>
        </div>
        <hr />
      </div>
      <div className="fromToLabel">
        <h2>
          from <strong>{flight.cityFrom}</strong> to{" "}
          <strong>{flight.cityTo}</strong>
        </h2>
      </div>
      <div className="ticketDetails">
        <h1>xxxx</h1>
        <h1>xxxx</h1>
        <h1>xxxx</h1>
      </div>
    </div>
  );
};
