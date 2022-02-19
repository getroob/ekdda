import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

const Map = () => {
  const positions = [
    { city: "Athens", longitude: 38, latitude: 24 },
    { city: "Thessaloniki", longitude: 38, latitude: 24 },
    { city: "Trikala", longitude: 38, latitude: 24 },
  ];
  const markers = [
    {
      title: "Hello world",
      description: "Lorem ipsum",
      longitude: 38,
      latitude: 23.8,
    },
    {
      title: "Hello world",
      description: "Lorem ipsum",
      longitude: 38,
      latitude: 23.85,
    },
    {
      title: "Hello world",
      description: "Lorem ipsum",
      longitude: 38,
      latitude: 23.88,
    },
  ];
  return (
    <MapContainer center={[38, 24]} zoom={7} className="main">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        spiderfyDistanceMultiplier={1}
        showCoverageOnHover={false}
      >
        {markers.map((m) => (
          <Marker position={[m.longitude, m.latitude]}>
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
