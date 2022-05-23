import { useLayoutEffect } from "react"
import { Fragment } from "react"
import { useState, cloneElement } from "react"
const ModalContext = ({children}) => {
  const [ open, setOpen ] = useState(undefined)
  const [ state, setState ] = useState(undefined)
  const handleToggleModal = (id) => {
    console.log(id)
  }
  const props = {
    handleToggleModal,
    open
  }
  // **Before clone element
  // **Dynamic create state 'open' depend on how many modal as children
  useLayoutEffect(() => {
    children.props.children.map((_, index) => setOpen(prev => ({ ...prev, [index]: false })))
  }, [children])
  //** If don't have state 'open'
  if ( open === undefined ) return null 
  //** After create state complete */ 
  const cloneChildrenWithProps = children.props.children.map((child, index) => 
    <Fragment key={index}>
      {cloneElement(child, { props, index })}
    </Fragment>
  )
  return cloneChildrenWithProps
}

export default ModalContext