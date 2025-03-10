import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import StationCard from "../components/stationCard";

import axios from "axios";
import { Filter } from "../components/filter";

export default function Dashboard() {
  const [stations,setStations] = useState([])
  const [stationCapacity, setStationCapacity] = useState(0);
  const router = useRouter();

  const getStationByCapacity = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}stations/capacity/${stationCapacity}`, {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwicGFzc3dvcmQiOiIkMmIkMTIkOWRCS2s2azJpczBOY1J2Y0NjL21tT1FPakpMRTM3OXdLZWFaWExiWWt1eEVQZWtGYWtVTDIifQ.fh4RumNQUNwTTRE8-fU7qgboJ8LfUPgPXLRTK8QHZwI`,
      },
    });
    console.log(response.data);
    setStations(response.data)
  }

  const getStation = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}stations`, {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwicGFzc3dvcmQiOiIkMmIkMTIkOWRCS2s2azJpczBOY1J2Y0NjL21tT1FPakpMRTM3OXdLZWFaWExiWWt1eEVQZWtGYWtVTDIifQ.fh4RumNQUNwTTRE8-fU7qgboJ8LfUPgPXLRTK8QHZwI`,
      },
    });
    console.log(response.data);
    setStations(response.data)
  }

  const putStation = async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}stations/${id}`, {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwicGFzc3dvcmQiOiIkMmIkMTIkOWRCS2s2azJpczBOY1J2Y0NjL21tT1FPakpMRTM3OXdLZWFaWExiWWt1eEVQZWtGYWtVTDIifQ.fh4RumNQUNwTTRE8-fU7qgboJ8LfUPgPXLRTK8QHZwI`,
      },
    });
    console.log(response.data);
    getStation();
  }
  
  useEffect(() => {
    
    getStation();


  }, []);

  return (
    <div >
      <Navbar />
      <div className="header-container">
        <Filter 
          setStationCapacity={setStationCapacity}
          getStationByCapacity={getStationByCapacity}
          getStation={getStation}
        />
        <h1>Estaciones</h1>
        <button className="btn-confirm" onClick={()=>{}}
        >Agregar Estacion</button>
      </div>
      <div className="card-container">
        {stations.map(({name,status, capacity}) => (
          <div className="card" key={name}>
              <StationCard 
                name={name} 
                status={status} 
                capacity={capacity}
                putStation={putStation}
              />
          </div>
        ))}
      </div>
    </div>
  );
}
