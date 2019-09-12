import React, { useState } from 'react'

export const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false)
  const hide = () => setIsShown(false)
  const show = () => setIsShown(true)

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  )
}

// Usage
//
// <ToggleContent
//   toggle={show => <button onClick={show}>SHOW</button>}
//   content={hide => (
//     <Modal>
//       <button onClick={hide}><CloseIcon/></button>
//       <Content/>
//     </Modal>
//   )}
// />
