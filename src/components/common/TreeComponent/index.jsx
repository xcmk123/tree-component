import { Fragment } from 'react'
import AddSubTreeIcon from '../../../assets/icons/AddSubTreeIcon'
import style from './style.module.scss'
import { ROLE, ROLE_LIST, RESULTS } from './constants'

const Node = ({children, isLastSub, isRootNode}) => {
  const NodeContent = () => {
    return (
      <div className={style["node"]}> 
        {children}
        { !isRootNode && <TreeLineComponent /> }
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
    if ( isRootNode ) {
      return <Component shouldRenderTreeLine={true} />
    }
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
  console.log(role)
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

const Render = (item) => {
  const nodeRole = item.subTree.role
  const subTreeLength = item.subTree?.data.length
  return item.subTree.data.map((item, index) => 
    <li key={index}>
      <Node 
        isRootNode={nodeRole === 'okr'}
        isLastSub={ subTreeLength === index + 1}
      >             
        <TitleSubTree title={`${item.title} index là ${index} có arr.lenght = ${subTreeLength}` } />
      </Node>
      {
        item.subTree 
          ? 
            <Fragment>
              <ContainerNode>
                <Node>
                  <AddSubTree role={item.subTree.role} />
                </Node>
                {Render(item)}
              </ContainerNode>  
            </Fragment>
          : null 
      }
    </li>
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