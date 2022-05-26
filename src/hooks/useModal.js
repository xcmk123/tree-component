import { useState } from "react"

const useModal = (props) => {
  const [ open, setOpen ] = useState(props.open)
  const [ cacheState, setCacheState ] = useState()
  const idFirstModal = Object.keys(open)[0]
  const handleToggle = (id) => {
    const index = Object.keys(open).findIndex(idModal => idModal === id)
    if ( index !== 0 ) return setOpen({ ...open, [id]: !open[id], [idFirstModal]: !open[idFirstModal] })
    setOpen({ ...open, [idFirstModal]: !open[idFirstModal] })

  }
  return {  
    open,
    cacheState,
    handleToggle
  }
}
export default useModal