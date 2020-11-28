import React from 'react';
import PropTypes from 'prop-types';

import Attachment from './Attachment';
import FeedbackButtons from './FeedbackButtons';
import ReportContent from './ReportContent';

const Report = ({ report, onAttachmentClick, onFeedbackSend }) => (
  <div
    className={`w-3/5 mb-10 ${
      report.solved ? 'cursor-default opacity-50' : ''
    }`}
  >
    <ReportContent report={report} />
    <div className="flex justify-between mt-4">
      <Attachment attachment={report.attachment} onClick={onAttachmentClick} />
      <FeedbackButtons
        display={!report.solved}
        reportId={report.id}
        onFeedbackSend={onFeedbackSend}
      />
    </div>
  </div>
);

Report.propTypes = {
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
  onAttachmentClick: PropTypes.func.isRequired,
  onFeedbackSend: PropTypes.func.isRequired,
};

export default Report;
