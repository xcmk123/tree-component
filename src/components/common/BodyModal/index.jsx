import style from './style.module.scss'
const BodyModal = ({children}) => {
  return (
    <div className={style.body_modal_container}>
      {children}
    </div>
  )
}
export default BodyModal