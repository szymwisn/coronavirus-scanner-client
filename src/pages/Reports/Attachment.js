import React from 'react';
import PropTypes from 'prop-types';

import attachmentIcon from 'assets/icons/attachment.svg';
import Icon from 'components/Icon';

const Attachment = ({ attachment, onClick }) => {
  if (attachment) {
    return (
      <button
        type="button"
        className="flex bg-cvsGray rounded-sm px-4 py-2 items-center hover:opacity-75 active:opacity-50 transition-all ease-in-out duration-100"
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
  onClick: PropTypes.func.isRequired,
};

Attachment.defaultProps = {
  attachment: null,
};

export default Attachment;
