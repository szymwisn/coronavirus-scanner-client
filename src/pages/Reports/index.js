import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Report from 'pages/Reports/Report';
import { useDispatch } from 'react-redux';
import reportsActions from 'state/actions/reportsActions';

const Reports = ({ reports }) => {
  const dispatch = useDispatch();

  const handleAttachmentClick = (src) => {
    console.log(src);
  };

  const handleFeedbackSend = (reportId, feedbackType) => {
    console.log(reportId, feedbackType);

    dispatch(reportsActions.sendFeedback(reportId, feedbackType));
  };

  return (
    <div className="flex flex-col items-center">
      {reports.map((report) => (
        <Report
          key={_.uniqueId()}
          report={report}
          onAttachmentClick={handleAttachmentClick}
          onFeedbackSend={handleFeedbackSend}
        />
      ))}
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
