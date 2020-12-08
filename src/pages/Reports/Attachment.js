import React from 'react';
import PropTypes from 'prop-types';

import attachmentIcon from 'assets/icons/attachment.svg';
import Icon from 'components/Icon';

const Attachment = ({ attachment, disabled, onClick }) => {
  if (attachment) {
    return (
      <button
        type="button"
        className={`flex bg-cvsGray rounded-sm px-4 py-2 items-center ${
          disabled
            ? 'cursor-default'
            : 'hover:opacity-75 active:opacity-50 transition-all ease-in-out duration-100'
        }`}
        disabled={disabled}
        onClick={() => onClick(attachment.src)}
      >
        <Icon size={24} alt="attachment" src={attachmentIcon} />
        <div className="ml-4">{attachment.name}</div>
      </button>
    );
  }

  return (
    <div className="flex bg-cvsGray rounded-sm px-4 py-2 items-center cursor-default">
      <Icon size={24} alt="attachment" src={attachmentIcon} />
      <div className="opacity-50 ml-4">Brak załącznika</div>
    </div>
  );
};

Attachment.propTypes = {
  attachment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Attachment.defaultProps = {
  attachment: null,
  disabled: false,
};

export default Attachment;
