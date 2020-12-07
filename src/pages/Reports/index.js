import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Report from 'pages/Reports/Report';
import { useDispatch } from 'react-redux';
import reportsActions from 'state/actions/reportsActions';
import Map from './Map';

const Reports = ({ reports }) => {
  const dispatch = useDispatch();

  const handleAttachmentClick = (src) => {
    console.log(src);
  };

  const handleFeedbackSend = (reportId, feedbackType) => {
    console.log(reportId, feedbackType);

    dispatch(reportsActions.sendFeedback(reportId, feedbackType));
  };

  useEffect(() => {
    if (reports) {
      reports.sort((a, b) => (a.solved > b.solved ? 1 : -1));
    }
  }, [reports]);

  return (
    <div className="w-full h-full flex flex-row justify-between">
      <div className="w-1/2 h-full mr-3">
        <Map
          reports={reports}
          onAttachmentClick={handleAttachmentClick}
          onFeedbackSend={handleFeedbackSend}
        />
      </div>
      <div className="w-1/2 h-full ml-3 flex flex-col overflow-auto">
        {reports.map((report) => (
          <Report
            key={_.uniqueId()}
            report={report}
            onAttachmentClick={handleAttachmentClick}
            onFeedbackSend={handleFeedbackSend}
          />
        ))}
      </div>
    </div>
  );
};

Reports.propTypes = {
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
  ),
};

Reports.defaultProps = {
  reports: [],
};

export default Reports;
