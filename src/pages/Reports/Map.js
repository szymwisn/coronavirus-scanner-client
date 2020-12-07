import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { MapContainer, Popup, TileLayer } from 'react-leaflet';
import Marker from 'react-leaflet-enhanced-marker';

import Report from './Report';

const Map = ({ reports, onAttachmentClick, onFeedbackSend }) => {
  const center = [52.229675, 20.01223];

  return (
    <MapContainer className="w-full h-full rounded-sm" center={center} zoom={5}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {reports.map((report) => {
        if (!report.solved) {
          return (
            <Marker
              icon={
                <div
                  className="w-6 h-6 bg-cvsRed rounded-xl shadow-cvsDark border-cvsGray border-2"
                  style={{ marginLeft: '39px', marginTop: '10px' }}
                />
              }
              key={_.uniqueId()}
              position={[report.lat, report.long]}
            >
              <Popup>
                <Report
                  report={report}
                  map
                  onAttachmentClick={onAttachmentClick}
                  onFeedbackSend={onFeedbackSend}
                />
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </MapContainer>
  );
};

Map.propTypes = {
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      attachment: PropTypes.shape({
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }),
      id: PropTypes.number.isRequired,
      cause: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      description: PropTypes.string.isRequired,
      solved: PropTypes.bool.isRequired,
      sender: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onAttachmentClick: PropTypes.func.isRequired,
  onFeedbackSend: PropTypes.func.isRequired,
};

export default Map;
