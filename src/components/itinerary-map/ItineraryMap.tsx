import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  Polyline,
} from 'react-leaflet';
import L, { LatLng } from 'leaflet';
import './ItineraryMap.scss';
import 'leaflet/dist/leaflet.css';

const icon = new L.Icon({
  iconUrl: require('./marker.png'),
  iconSize: [48, 48],
  iconAnchor: [25, 42],
  popupAnchor: [-2, -40],
  tooltipAnchor: [10, -15],
});

const positionEiffel = new LatLng(48.85826, 2.2945);
const positionArch = new LatLng(48.87366, 2.29529);
const positionMap = new LatLng(
  (positionEiffel.lat + positionArch.lat) / 2,
  (positionEiffel.lng + positionArch.lng) / 2 - 0.012,
);
const route = [
  new LatLng(48.85826, 2.2945),
  new LatLng(48.86296, 2.28727),
  new LatLng(48.86683, 2.28998),
  new LatLng(48.87243, 2.29408),
  new LatLng(48.87366, 2.29529),
];

const ItineraryMap: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <div className="map-container">
      <MapContainer
        center={positionMap}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {step !== 3 && (
          <Marker position={positionEiffel} icon={icon}>
            <Popup>Eiffel Tower</Popup>
            <Tooltip>Eiffel Tower</Tooltip>
          </Marker>
        )}
        {step !== 1 && (
          <Marker position={positionArch} icon={icon}>
            <Popup>Arch of Triumph</Popup>
            <Tooltip>Arch of Triumph</Tooltip>
          </Marker>
        )}
        {step === 2 && (
          <Polyline
            pathOptions={{ color: '#186b6d', weight: 8, opacity: 0.8 }}
            positions={route}
          />
        )}
      </MapContainer>
      <div className="card">
        {step > 1 && (
          <a
            className="icon left"
            onClick={() => {
              if (step === 1) {
                return;
              }
              setStep(step - 1);
            }}
          >
            <FiChevronLeft size={32} />
          </a>
        )}
        <h3>{`Step ${step}`}</h3>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque orci arcu, efficitur quis ligula et, pharetra volutpat
            augue. Cras consequat purus felis, sit amet aliquam quam bibendum
            non. Nulla imperdiet eu elit sed dictum. Vivamus purus arcu, mollis
            ac tempor at, cursus sit amet est. Sed rhoncus suscipit nulla, ac.{' '}
          </p>
        </section>
        {step < 3 && (
          <a
            className="icon right"
            onClick={() => {
              if (step === 3) {
                return;
              }
              setStep(step + 1);
            }}
          >
            <FiChevronRight size={32} />
          </a>
        )}
      </div>
    </div>
  );
};

export { ItineraryMap };
