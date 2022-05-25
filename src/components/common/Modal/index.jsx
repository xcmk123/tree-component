import style from './style.module.scss'
import { createPortal } from "react-dom"

const Modal = ({ open, zIndex, children }) => {
  if ( !open ) return null
  return createPortal(
    <div id={style['container-modal']} style={{ zIndex: 1000 - zIndex }}>
      <div className={style['container-content-modal']}>
        {children}
      </div>
    </div>,
    document.getElementById('container-portal')
  )
}

export default Modal