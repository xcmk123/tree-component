import { Fragment } from 'react'
import AddSubTreeIcon from '../../../assets/icons/AddSubTreeIcon'
import style from './style.module.scss'

const tree1 = [1,2]
const tree2 = [1,2,3]

const ROLE = {
  ork:  'Thêm sub OKR',
  kr: 'Thêm KR',
  task: 'Thêm Task'
}

const Node = ({children, lastSub = false}) => {
  return (
    <div className={style["node"]}>
      <div className={style["tree-line"]} />
      {children}
      { !lastSub && <div className={style["tree-line-root"]} /> }
    </div>
  )
}

const ContainerNode = ({children, lastSub = false}) => {
  return (
    <ul className={style["container-node"]}>
      {children}
      { !lastSub && <div className={style['tree-line-root']} /> }
    </ul>
  )
}
const AddSubTree = ({role, onClick}) => {
  return (
    <Node>
      <div className={style['container-add-sub-tree']}>
        <AddSubTreeIcon />
        <span>{ROLE[role]}</span>
      </div>
    </Node> 
  )
}

const TitleSubTree = ({title}) => {
  return <p className={style['title-sub-tree']}>{title}</p>
}
const Render = (list) => {
  console.log(list)
  if ( list.data ) return 
    <Fragment>
      <AddSubTree role={list.role} />
      
    </Fragment>
  return null
}
const TreeComponent = () => {
  return (
    <ul id="OKR">
      {[1, 2].map((item, index) =>
        // OKR 
        <li key={index}>
          <TitleSubTree title={`OKR ${item}`} />
          <ul>
            <AddSubTree role="ork" />
            {tree1.map((item, index) => 
              // SUB_OKR
              <li key={index}>
                <Node lastSub={tree1.length === index + 1}>
                  <TitleSubTree title={`SUB_OKR ${item}`} />
                </Node> 
                <ContainerNode lastSub={tree1.length === index + 1}>
                  <AddSubTree role="kr" />
                  {tree1.map((item, index) => 
                    // KR
                    <li key={index}>
                      <Node lastSub={tree1.length === index + 1}>
                        <TitleSubTree title={`KR ${item}`} />
                      </Node> 
                      <ContainerNode lastSub={tree1.length === index + 1}>
                        <AddSubTree role="task" />
                        {tree2.map((item, index) => 
                          // TASK
                          <li key={index}>
                            <Node lastSub={tree2.length === index + 1}>
                              <TitleSubTree title={`TASK ${item}`} />
                            </Node>
                          </li>
                        )}
                      </ContainerNode>
                    </li>
                  )}
                </ContainerNode>
              </li>
            )}
          </ul>
        </li>
      )}
    </ul>
  )
}

export default TreeComponent