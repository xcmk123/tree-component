import { useState } from 'react'
import { useRef } from 'react'
import useClickOutside from '../../../hooks/useClickOutside'
import style from './style.module.scss'
const Menu = ({children, className, icon}) => {
  const ref = useRef(null)

  const [ isVisible, setVisible ] = useState(false)
  
  const onClickOutside = () => {
    setVisible(false)
  }

  const onClickMenu = () => {
    setVisible(!isVisible)
  }

  const MenuContainer = ({children, className}) => {
    useClickOutside(ref, onClickOutside)
    return (
      <div 
        className={[style["dd-menu"], className].join(' ')} 
        ref={ref} 
        onClick={onClickMenu}
      >
        {children}
      </div>
    )
  }

  return (
    <label className={style['dropdown']} onClick={onClickMenu}>
      {icon}
      {
        isVisible && 
          <MenuContainer className={className}>
            {children}
          </MenuContainer>
      }
    </label>
  )
} 
export default Menu