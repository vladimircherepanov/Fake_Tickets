import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../redux/actions";

import { convertTimeStamp } from "./utils/convertTimeStamp";

export default (props) => {
  const dispatch = useDispatch();
  const con = props.data.data.map((e) => {
    return (
      <div key={e.id} className="row">
        <div className="col">{e.airlines}</div>
        <div className="col">{convertTimeStamp(e.aTime)}</div>
        <div className="col">{convertTimeStamp(e.dTime)} </div>
        <div className="col">{e.price}</div>
        <div className="col">
          <button
            className="btn btn-warning"
            onClick={() => dispatch(getTicket(e.id))}
          >
            SELECT
          </button>
        </div>
      </div>
    );
  });
  return con;
};
