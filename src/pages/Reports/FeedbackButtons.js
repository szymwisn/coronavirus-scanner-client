import Button from 'components/Button';
import React from 'react';
import PropTypes from 'prop-types';

const FeedbackButtons = ({ onFeedbackSend }) => (
  <div className="flex">
    <Button text="Odrzuć" onClick={() => onFeedbackSend('a', 'b')} />
    <span className="ml-5">
      <Button text="Ukaraj" primary onClick={() => onFeedbackSend('c', 'd')} />
    </span>
  </div>
);

FeedbackButtons.propTypes = {
  onFeedbackSend: PropTypes.func.isRequired,
};

export default FeedbackButtons;
