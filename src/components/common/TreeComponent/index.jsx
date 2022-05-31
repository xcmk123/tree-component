import { Fragment } from 'react'
import AddSubTreeIcon from '../../../assets/icons/AddSubTreeIcon'
import style from './style.module.scss'
import { ROLE, RESULTS } from './constants'
import Collapsible from '../../Collapsible/Collapsible'

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
      return <Component shouldRenderTreeLine={false} />
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
  return (
    <div className={style['container-add-sub-tree']}>
      <AddSubTreeIcon />
      <span>{ROLE[role]}</span>
    </div>
  )
}

const TitleSubTree = ({title}) => {
  return <p className={style['title-sub-tree']}>{title}</p>
}

const Render = (item) => {
  const nodeRole = item?.subtree.role
  const subTreeLength = item.subtree?.data.length
  const TitleContainer = ({element, index}) => {
    return (
      <Node 
        isLastSub={subTreeLength === index + 1}
        isRootNode={nodeRole === 'okr'}
      >             
        <TitleSubTree title={element.title} />
      </Node>
    )
  }
  return item.subtree.data.map((element, index) => 
    {
      return (
        <li key={Math.random()}>
          {
            element.subtree 
            ? 
              <Collapsible TitleContainer={<TitleContainer element={element} index={index} />}>
                <ContainerNode 
                  isLastSub={subTreeLength !== index + 1}
                  isRootNode={nodeRole === 'okr'}
                >
                  <Node isLastSub={element.subtree?.data.length === 0}>
                    <AddSubTree role={element.subtree?.role} />
                  </Node>
                  { element.subtree && Render(element)}
                </ContainerNode>
              </Collapsible>
            : 
              <TitleContainer element={element} index={index} />
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