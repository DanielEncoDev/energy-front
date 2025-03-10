import React from 'react';

export const Filter = ({ setStationCapacity, getStationByCapacity, getStation }) => (
  <div className='card-container'>
    <h3>Filtrar por capacidad</h3>
    <input className='input' 
      id={`filter`}
      name={"filterStatus"}
      type="number"
      onChange={(e)=>{e.target.value ? setStationCapacity(e.target.value) : getStation()} } 
      placeholder={`Buscar capacidad...`}
    />
    <button
      className='btn-confirm'
      onClick={()=>{getStationByCapacity()}}
    >
      Buscar
    </button>
  </div>
);