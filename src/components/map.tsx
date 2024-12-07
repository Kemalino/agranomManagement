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

// Custom Marker Icon (Optional)
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
      map.flyTo([lat, lng], 17); // Adjust zoom level if needed
    }
  }, [lat, lng, map, shouldFly]);

  return null;
};

const TreeMap = () => {
  // Garden bounds and center
  const gardenCenter = [37.7749, -122.4194];
  const gardenBounds = [
    [37.77, -122.423], // Southwest corner
    [37.779, -122.415], // Northeast corner
  ];

  // Example tree data
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

  // State to manage selected location
  const [selectedLocation, setSelectedLocation] = useState({
    lat: NaN,
    lng: NaN,
  });
  const [shouldFly, setShouldFly] = useState(false); // New state to control flying behavior

  // References to marker popups
  const markerRefs = useRef([]);

  // Function to go to a specific location
  const goToLocation = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
    setShouldFly(true); // Set fly behavior to true

    // Check if there's a marker at the specified location
    const markerIndex = trees.findIndex(
      (tree) => tree.lat === lat && tree.lng === lng
    );
    if (markerIndex !== -1 && markerRefs.current[markerIndex]) {
      // Open the popup programmatically
      markerRefs.current[markerIndex].openPopup();
    }
  };

  return (
    <div>
      {/* Button to Test Navigation */}
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
        maxZoom={19} // Set the maxZoom here
      >
        {/* Base Tile Layer */}
        <TileLayer
          maxZoom={19}
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Highlight Garden Boundary */}
        <Rectangle
          bounds={gardenBounds}
          pathOptions={{ color: 'green', weight: 2 }}
        />

        {/* Fly to Selected Location */}
        <FlyToLocation
          lat={selectedLocation.lat}
          lng={selectedLocation.lng}
          shouldFly={shouldFly} // Pass fly control state
        />

        {/* Tree Markers */}
        {trees.map((tree, index) => (
          <Marker
            key={tree.id}
            position={[tree.lat, tree.lng]}
            icon={customIcon}
            ref={(el) => (markerRefs.current[index] = el)} // Store marker reference
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
