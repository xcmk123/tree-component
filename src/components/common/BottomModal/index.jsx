import style from './style.module.scss'
const BottomModal = ({children}) => {
  return (
    <div className={style.bottom_modal_container}> 
      {children}
    </div>
  )
}
export default BottomModal