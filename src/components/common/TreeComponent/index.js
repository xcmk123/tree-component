
const tree1 = [1,2]
const tree2 = [1,2,3]

const Node = ({children, lastSub = false}) => {
  return (
    <div className="node">
      <div className="tree-line" />
      {children}
      { !lastSub && <div className="tree-line-root" /> }
    </div>
  )
}
const ContainerNode = ({children, lastSub = false}) => {
  return (
    <ul className="container-node">
      {children}
      { !lastSub && <div className="tree-line-root" /> }
    </ul>
  )
}

const TreeComponent = () => {
  return (
    <ul id="OKR">
      {[1].map((item, index) =>
        // OKR 
        <li key={index}><span>OKR {item}</span>
          <ul>
            <Node><span>+ Thêm SUB_OKR</span></Node> 
            {tree1.map((item, index) => 
              // SUB_OKR
              <li key={index}>
                <Node lastSub={tree1.length === index + 1}><span>SUB_OKR {item}</span></Node> 
                <ContainerNode lastSub={tree1.length === index + 1}>
                  <Node><span>+ Thêm KR</span></Node> 
                  {tree1.map((item, index) => 
                    // KR
                    <li key={index}>
                      <Node lastSub={tree1.length === index + 1}><span>KR {item}</span></Node> 
                      <ContainerNode lastSub={tree1.length === index + 1}>
                        <Node><span>+ Thêm task</span></Node> 
                        {tree2.map((item, index) => 
                          // TASK
                          <li key={index}>
                            <Node lastSub={tree2.length === index + 1}><span>TASK {item}</span></Node>
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