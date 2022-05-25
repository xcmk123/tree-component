import style from "./style.module.scss"

const Dot = ({ theme }) => {
  return (
    <div  
      className={`
        ${style.dot}
        ${style[theme]}
      `} 
    />
  )
}
export default Dot