import './style.css'
import { createPortal } from "react-dom"

const Modal = ({ props, index, children}) => {
  // if ( !open ) return null
  return createPortal(
    <div id="modal" style={{ zIndex: 1000 - index }}>
      {children({ ...props, index })}
    </div>,
    document.getElementById('portal')
  )
}

export default Modal