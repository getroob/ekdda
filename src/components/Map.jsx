import React, { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";

const Map = () => {
  // const map = useMap();
  const [map, setMap] = useState(null);
  const [selectedMarkers, setSelectedMarkers] = useState([]);
  const positions = [
    { city: "Athens", lng: 38, lat: 24 },
    { city: "Thessaloniki", lng: 38, lat: 24 },
    { city: "Trikala", lng: 38, lat: 24 },
  ];
  const markers = [
    {
      id: 1,
      title: "Hello world",
      description: "Lorem ipsum",
      lng: 38,
      lat: 23.8,
    },
    {
      id: 2,
      title: "Hello world",
      description: "Lorem ipsum",
      lng: 38,
      lat: 23.85,
    },
    {
      id: 3,
      title: "Hello world",
      description: "Lorem ipsum",
      lng: 38,
      lat: 23.88,
    },
  ];

  const updateList = useCallback(() => {
    let newList = [];
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        console.log(layer);
        if (map.getBounds().contains(layer.getLatLng())) {
          newList.push(layer._popup._latlng);
        }
      }
    });
    setSelectedMarkers(newList);
  }, [selectedMarkers, map]);

  useEffect(() => {
    if (map) {
      map.on("moveend", updateList);
      return () => {
        map.off("moveend", updateList);
      };
    }
  }, [map, updateList]);

  useEffect(() => {
    console.log(selectedMarkers);
  }, [selectedMarkers]);

  return (
    <MapContainer
      whenCreated={setMap}
      center={[38, 24]}
      zoom={7}
      className="main"
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
          <Marker key={m.id} position={[m.lng, m.lat]}>
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

export default Map;
