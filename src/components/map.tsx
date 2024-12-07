import React, { useRef, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Rectangle,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
  iconSize: [38, 38],
  iconAnchor: [22, 38],
  popupAnchor: [-3, -76],
});

// Component to Fly to Location
const FlyToLocation = ({ lat, lng, shouldFly }) => {
  const map = useMap();

  React.useEffect(() => {
    if (shouldFly && lat && lng) {
      map.flyTo([lat, lng], 17);
    }
  }, [lat, lng, map, shouldFly]);

  return null;
};

const TreeMap = () => {
  const gardenCenter = [37.7749, -122.4194];
  const gardenBounds = [
    [37.77, -122.423],
    [37.779, -122.415],
  ];

  const trees = [
    {
      id: 1,
      lat: 37.7749,
      lng: -122.4194,
      name: 'Apple Tree',
      health: 'Healthy',
    },
    {
      id: 2,
      lat: 37.7755,
      lng: -122.418,
      name: 'Orange Tree',
      health: 'Needs Water',
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState({
    lat: NaN,
    lng: NaN,
  });
  const [shouldFly, setShouldFly] = useState(false);

  const markerRefs = useRef([]);

  const goToLocation = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
    setShouldFly(true);

    const markerIndex = trees.findIndex(
      (tree) => tree.lat === lat && tree.lng === lng
    );
    if (markerIndex !== -1 && markerRefs.current[markerIndex]) {
      markerRefs.current[markerIndex].openPopup();
    }
  };

  return (
    <div>
      <button onClick={() => goToLocation(37.7749, -122.4194)}>
        Go to Apple Tree
      </button>
      <button onClick={() => goToLocation(37.7755, -122.418)}>
        Go to Orange Tree
      </button>

      <MapContainer
        center={gardenCenter}
        zoom={17}
        style={{ height: '600px', width: '100%' }}
        maxBounds={gardenBounds}
        maxBoundsViscosity={1.0}
        maxZoom={19}
      >
        <TileLayer
          maxZoom={19}
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Rectangle
          bounds={gardenBounds}
          pathOptions={{ color: 'green', weight: 2 }}
        />

        <FlyToLocation
          lat={selectedLocation.lat}
          lng={selectedLocation.lng}
          shouldFly={shouldFly}
        />

        {trees.map((tree, index) => (
          <Marker
            key={tree.id}
            position={[tree.lat, tree.lng]}
            icon={customIcon}
            ref={(el) => (markerRefs.current[index] = el)}
          >
            <Popup>
              <strong>{tree.name}</strong>
              <br />
              Health: {tree.health}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default TreeMap;
