import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define custom marker icon (optional)
import L from 'leaflet';
const customIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
  iconSize: [38, 38],
  iconAnchor: [22, 38],
  popupAnchor: [-3, -76],
});

const TreeMap = () => {
  // Garden center and bounds (replace with your real data)
  const gardenCenter = [37.7749, -122.4194]; // Replace with your garden's center coordinates
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

  return (
    <MapContainer
      center={gardenCenter}
      zoom={17} // Adjust zoom level for your garden
      style={{ height: '600px', width: '100%' }}
      maxBounds={gardenBounds} // Restrict map to the garden area
      maxBoundsViscosity={1.0} // Prevents dragging outside the bounds
    >
      {/* Base map tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Highlight garden boundary */}
      <Rectangle
        bounds={gardenBounds}
        pathOptions={{ color: 'green', weight: 2 }}
      />

      {/* Add tree markers */}
      {trees.map((tree) => (
        <Marker
          key={tree.id}
          position={[tree.lat, tree.lng]}
          icon={customIcon} // Optional: Use custom icons for trees
        >
          <Popup>
            <strong>{tree.name}</strong>
            <br />
            Health: {tree.health}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TreeMap;
