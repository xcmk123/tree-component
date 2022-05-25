import { useEffect, useRef } from 'react'
import style from './style.module.scss'
const Menu = () => {
  const ref = useRef(null)
  const handleClickOutside = (event) => {
    if (ref && !ref.current.contains(event.target)) {
      alert("You clicked outside of me!");
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[])
  return (
  <label className={style['dropdown']}>
    <div className={style['dd-button']}>
      Dropdown
    </div>
    <input type="checkbox" className={style["dd-input"]} id="test" />
    <ul className={style["dd-menu"]} ref={ref}>
      <li>Action</li>
      <li>Another action</li>
      <li>Something else here</li>
    </ul>
  </label>
  )
} 
export default Menu