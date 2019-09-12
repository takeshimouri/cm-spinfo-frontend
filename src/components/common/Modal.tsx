import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { makeStyles } from '@material-ui/core/styles';
// import { blue } from '@material-ui/core/colors';
import { Close as CloseIcon } from '@material-ui/icons';

import './Modal.css';

ReactModal.setAppElement('#modal-root');

interface ModalProps {
  title: string;
  open: Function;
  content: Function;
  outClickClose: boolean;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing(1),
  },
  iconHover: {
    margin: theme.spacing(1),
    '&:hover': {
      // color: blue[800],
      color: '#172b4d',
    },
  },
}));

export const Modal: React.FC<ModalProps> = ({
  title,
  open,
  content,
  outClickClose,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const classes = useStyles();

  return (
    <div>
      {open(handleOpenModal)}
      <ReactModal
        isOpen={showModal}
        contentLabel="Inline Styles Modal Example"
        onRequestClose={handleCloseModal} // click overlay to close
        shouldCloseOnOverlayClick={outClickClose || false} // click overlay to close
        style={{
          overlay: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.8)',
          },
          content: {
            flexDirection: 'column',
            // minHeight: '80%',
            // minHeight: '600px',
            minWidth: '600px',
            padding: '0',
            top: 'auto',
            left: 'auto',
            bottom: 'auto',
            right: 'auto',
            // background: 'rgb(244, 245, 247)',
            background: 'rgb(255, 255, 255)',
          },
        }}
      >
        <div className="modal-header">
          <span className="modal-header-title">{title}</span>
          {/* <p className="modal-header-closeIcon"><CloseIcon className={`modal-header-closeIcon ${classes.iconHover}`} fontSize="large" color="disabled" style={{ fontSize: 20 }} onClick={handleCloseModal}/> */}
          <p className="modal-header-closeIcon">
            <CloseIcon
              className={classes.iconHover}
              fontSize="large"
              color="disabled"
              style={{ fontSize: 20 }}
              onClick={handleCloseModal}
            />
          </p>
        </div>
        <div className="modal-body">{content(handleCloseModal)}</div>
      </ReactModal>
    </div>
  );
};

export default Modal;
