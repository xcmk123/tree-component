import style from './style.module.scss'


const ROLE = {
  default: 'btn',
  icon: 'btn-icon'
}

const DENSE = {
  sm: 'dense-sm',
  md: 'dense-md'
}

const SIZE_ICON = {
  sm: 'btn-icon-size-sm',
  md: 'btn-icon-size-md'
}

const VARIANT =  {
  standard: 'btn-standard',
  filled: 'btn-filled',
  outlined: 'btn-outlined'
}

const THEME = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  tertiary: 'btn-tertiary'
}

const THEME_ICON = {
  primary: 'btn-icon-primary',
}

const styles = (props) => {
  let className = [
    style['btn'],
    style[DENSE[`${props.dense}`]],
    style[VARIANT[`${props.variant}`]],
    style[ROLE[`${props.role}`]],
    style[THEME[`${props.theme}`]],
    style[THEME_ICON[`${props.themeIcon}`]],
    style[SIZE_ICON[`${props.sizeIcon}`]]
  ].join(' ')
  return className
}

const Button = (props) => {
  const { onClick, children ,disabled, loading, ...other } = props
  return (
    <button 
      className={styles(other)}  
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button