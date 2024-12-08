import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const trees = [
  { id: 1, name: 'Apple Tree', lat: 46.501, lng: 7.5635 },
  { id: 2, name: 'Peach Tree', lat: 46.502, lng: 7.5645 },
  { id: 3, name: 'Cherry Tree', lat: 46.503, lng: 7.5655 },
];

const OrchardMap: React.FC = () => {
  // const [selectedTree, setSelectedTree] = useState<any>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markerRefs = useRef<any>({}); // To store references to markers

  console.log('mapRef: ', mapRef.current?.setView);

  // Adjusted map boundaries
  const mapBounds = [
    [46.498, 7.561], // Southwest corner
    [46.505, 7.569], // Northeast corner
  ];

  const handleFlyTo = (lat: number, lng: number) => {
    if (mapRef.current) {
      // Access the flyTo method
      mapRef.current.flyTo([lat, lng], 17); // [lat, lng] and zoom level
    }
  };

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {/* Map Container */}
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        zoom={17}
        maxBounds={mapBounds} // Restrict panning
        minZoom={16} // Prevent zooming out too far
        maxZoom={20} // Allow close-up zoom
        dragging={false} // Disable dragging (prevents map from resetting to the center)
        scrollWheelZoom={true} // Allow zooming with mouse wheel
        ref={mapRef} // Attach map ref
        center={[46.5, 7.565]} // Initial center of the map
      >
        {/* Tile Layer */}
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Markers */}
        {trees.map((tree) => (
          <Marker
            key={tree.id}
            position={[tree.lat, tree.lng]}
            ref={(el) => (markerRefs.current[tree.id] = el)} // Store reference to the marker
            eventHandlers={{
              click: () => {
                handleFlyTo(tree.lat, tree.lng);
                // Fly to the marker
                // setSelectedTree(tree); // Set the selected tree to update the state
              },
            }}
          >
            <Popup>{tree.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Tree Details Modal */}
      {/* {selectedTree && (
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'white',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
            zIndex: 100, // Ensure it stays above the map
          }}
        >
          <h3>{selectedTree.name}</h3>
          <p>Tree ID: {selectedTree.id}</p>
          <p>Latitude: {selectedTree.lat}</p>
          <p>Longitude: {selectedTree.lng}</p>
        </div>
      )} */}
    </div>
  );
};

export default OrchardMap;
