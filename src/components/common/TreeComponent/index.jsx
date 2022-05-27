import { Fragment } from 'react'
import AddSubTreeIcon from '../../../assets/icons/AddSubTreeIcon'
import style from './style.module.scss'
import { ROLE, ROLE_LIST, RESULTS } from './constants'

const Node = ({children, isLastSub, isRootNode}) => {
  const NodeContent = () => {
    return (
      <div className={style["node"]}> 
        {children}
        {/* { !isRootNode && <TreeLineComponent /> } */}
        <TreeLineComponent /> 
      </div>
    )
  }
  const TreeLineComponent = () => {
    return ( 
      <Fragment>
        <div className={style["tree-line"]} />
        { !isLastSub && <div className={style["tree-line-root"]} /> }
      </Fragment>
      )
  }
  return <NodeContent />
}

const ContainerNode = ({children, isLastSub = false, isRootNode}) => {
  const RenderByProps = (Component) => {
    // if ( isRootNode ) {
    //   return <Component shouldRenderTreeLine={true} />
    // }
    return <Component shouldRenderTreeLine={isLastSub} />
  }
  const TreeLineRoot = ({shouldRenderTreeLine}) => {
    return (
      <ul className={style["container-node"]}>
        {children} 
        { shouldRenderTreeLine && <div className={style['tree-line-root']} /> }
      </ul>
    )
  }
  return RenderByProps(TreeLineRoot)
}
const AddSubTree = ({role, onClick}) => {
  return (
    <div className={style['container-add-sub-tree']}>
      <AddSubTreeIcon />
      <span>Thêm {ROLE_LIST[role]}</span>
    </div>
  )
}

const TitleSubTree = ({title}) => {
  return <p className={style['title-sub-tree']}>{title}</p>
}

const isLastSub = ( element, index ) => {
  const subTreeLength = element?.subTree?.data.length
  if ( subTreeLength === 1 ) return true 
  return subTreeLength === index + 1
}

const Render = (item) => {
  const nodeRole = item.subTree.role
  const subTreeLength = item.subTree?.data.length
  return item.subTree.data.map((element, index) => 
  {
    return (
      <li key={Math.random()}>
        <Node isLastSub={subTreeLength === index + 1}>             
          <TitleSubTree title={`${element.title} index là ${index} có arr.lenght = ${subTreeLength}` } />
        </Node>
        {
          element.subTree 
            ? 
              <Fragment>
                <ContainerNode>
                  <Node>
                    <h5 style={{ color: 'red' }}>{element.subTree.role} {element.subTree.data.length}</h5>
                    <AddSubTree role={element.subTree.role} />
                  </Node>
                  {Render(element)}
                </ContainerNode>
              </Fragment>
            : null 
        }
      </li>
    )
  }
)
}
const TreeComponent = () => {
  return (
    <ul id="OKR" style={{ padding: 0 }}>
      {Render(RESULTS)}
    </ul>
  )
}

export default TreeComponent