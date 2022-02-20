import React, { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";

const Map = ({markerId}) => {
  const [map, setMap] = useState(null);
  const [selectedMarkers, setSelectedMarkers] = useState([]);
  const [didRun, setRun] = useState(false);
  const markers = {
    1:{
      id: 1,
      title: "Hello world",
      description: "Lorem ipsum",
      latlng: { lat: 23.8, lng: 38}
    },
    2:{
      id: 2,
      title: "Hello world",
      description: "Lorem ipsum",
      latlng: { lat: 23.85, lng: 38}
    },
    3:{
      id: 3,
      title: "Hello world",
      description: "Lorem ipsum",
      latlng: { lat: 23.88, lng: 38}
    },
  };

  const updateList = useCallback(() => {
    let newList = [];
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        if (map.getBounds().contains(layer.getLatLng()) && layer.options.data) {
          newList.push(layer.options.data);
        }
      }
    });
    setSelectedMarkers(newList);
  }, [selectedMarkers, map]);

  useEffect(() => {
      if (!map) return;
      if(markerId && !didRun) {
        let cords = markers[markerId].latlng;
        map.setView([ cords.lng, cords.lat ], 14);
        setRun(true);
      }
      map.on("moveend", updateList);
      return () => {
        map.off("moveend", updateList);
      };
  }, [map, updateList]);

  useEffect(() => {
    console.log(selectedMarkers);
  }, [selectedMarkers]);

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
        {Object.values(markers).map((m) => (
          <Marker key={m.id} position={[m.latlng.lng, m.latlng.lat]} data={m}>
            <Popup key={m.id}>
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
  markerId: null
  };

export default Map;
