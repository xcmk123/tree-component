import CloseSquareIcon from "../../../assets/svg/CloseSquareIcon"
import style from './style.module.scss'

const HeaderModal = ({ headerContent, handleClose }) => {
  return (
    <div className={style.header_modal_container}>
      <p>{headerContent}</p>
      <div onClick={handleClose} className={style.close_icon_container}>
        <CloseSquareIcon />
      </div>
    </div>
  )
}
export default HeaderModal