import React, { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";

const Map = ({ markerId, setSelectedList }) => {
  const [map, setMap] = useState(null);
  const [selectedMarkers, setSelectedMarkers] = useState([]);
  const [didRun, setRun] = useState(false);
  const markers = JSON.parse(localStorage.getItem("ekdda-data"));

  const updateList = useCallback(() => {
    let newList = [];
    map.eachLayer((layer) => {
      if(layer instanceof L.MarkerClusterGroup) {
        layer.getLayers().length && layer.getLayers().map(m => {
          if (layer.hasLayer && map.getBounds().contains(m.getLatLng()) && m.options.data) {
            newList.push(m.options.data); 
          }
        });
      }
    });
    setSelectedMarkers(newList);
    setSelectedList(newList);
  }, [selectedMarkers, map]);

  useEffect(() => {
    if (!map) return;
    if (markerId && !didRun) {
      let cords = markers.find((m) => m.projectID == markerId).latlng;
      map.setView([cords.lng, cords.lat], 14);
      setRun(true);
    }
    map.on("moveend", updateList);
    return () => {
      map.off("moveend", updateList);
    };
  }, [map, updateList, markerId]);

  return (
    <MapContainer
      whenCreated={setMap}
      center={[38, 24]}
      zoom={7}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />
      <MarkerClusterGroup
        spiderfyDistanceMultiplier={1}
        showCoverageOnHover={false}
      >
        {markers.map((m) => (
          <Marker
            key={m.projectID}
            position={[m.latlng.lng, m.latlng.lat]}
            data={m}
          >
            <Popup>
              <div>
                <b>{m.title}</b>
              </div>
              <div>{m.description}</div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

Map.defaultProps = {
  markerId: null,
  setSelectedList: () => {},
};

export default Map;
