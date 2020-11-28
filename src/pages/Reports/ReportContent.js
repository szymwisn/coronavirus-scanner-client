import React from 'react';
import PropTypes from 'prop-types';

import { convertDateToString } from 'utils/converters';

const ReportContent = ({ report }) => (
  <div className="p-4 rounded-sm bg-cvsGray">
    <div className="flex justify-between">
      <div className="font-medium">Zgłoszenie #{report.id}</div>
      <div>{convertDateToString(report.date)}</div>
    </div>
    <div className="my-4">
      <div>
        <span className="font-medium">Wysyłający: </span> {report.sender}
      </div>
      <div>
        <span className="font-medium">Powód: </span> {report.cause}
      </div>
    </div>
    <div>{report.description}</div>
  </div>
);

ReportContent.propTypes = {
  report: PropTypes.shape({
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
  }).isRequired,
};

export default ReportContent;
