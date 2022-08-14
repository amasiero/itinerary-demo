import React from 'react';
import { ItineraryMap } from '../../components/itinerary-map/ItineraryMap';
import { SideInformation } from '../../components/side-infomation/SideInformation';
import './HomePage.scss';

const HomePage: React.FC = () => (
  <div className="container">
    <SideInformation />
    <ItineraryMap />
  </div>
);

export default HomePage;
