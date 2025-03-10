import { MdOutlineModeEdit } from "react-icons/md";

export default function StationCard( {id, name, status, capacity, putStation} ) {

  return (
    <div>
        <div className="capacity">
            <button 
                className="btn-edit"
                onClick={()=>putStation(id)}
            ><MdOutlineModeEdit /></button>
        </div>
        <div className="station-card" >
            <h2>{name}</h2>
            <div className="circle" style={{backgroundColor: status ? "green" : "red"}}></div>
        </div>
        <div className="capacity">
            <p>{`Cap: ${capacity}`}</p>
        </div>
    </div>
  );
}
