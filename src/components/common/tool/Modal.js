import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

export const Modal = ({ children }) => (
  ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  )
)