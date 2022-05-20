import "./App.css";
// const TASKS = [
//   {
//     id: 1,
//     name: "This is header 1",
//     deadLine: "31/5/2021",
//     role: "HEADER",
//     employee: {
//       id: "Mor_Hn_223",
//       name: "Hieu_Mor",
//     },
//     density: 50,
//     process: 90,
//     quality: 50,
//     sub_tree: {
//       role: "SUB_OKR",
//       data: [
//         {
//           id: 1,
//           name: "This is SUB_OKR 1",
//           sub_tree: {
//             role: "KR",
//             data: [
//               { id: 1, name: "This is KR 1" },
//               { id: 2, name: "This is KR 2" },
//               { id: 3, name: "This is KR 3" },
//             ],
//           },
//         },
//         // { id: 2, name: 'This is SUB_OKR 2' },
//         // { id: 3, name: 'This is SUB_OKR 3' }
//       ],
//     },
//   },
//   {
//     id: 1,
//     name: "This is header 2",
//     deadLine: "31/5/2021",
//     role: "HEADER",
//     employee: {
//       id: "Mor_Hn_223",
//       name: "Hieu_Mor",
//     },
//     density: 50,
//     process: 90,
//     quality: 50,
//     sub_tree: {
//       role: "SUB_OKR",
//       data: [
//         {
//           id: 1,
//           name: "This is SUB_OKR 1",
//           sub_tree: {
//             role: "KR",
//             data: [
//               { id: 1, name: "This is KR 1" },
//               { id: 2, name: "This is KR 2" },
//               { id: 3, name: "This is KR 3" },
//             ],
//           },
//         },
//         // { id: 2, name: 'This is SUB_OKR 2' },
//         // { id: 3, name: 'This is SUB_OKR 3' }
//       ],
//     },
//   },
// ];
// const AccordionTree = (props) => {
//   console.log(props.list);
//   return props.list.map((item) => {
//     if (item.sub_tree) {
//       return (
//         <div key={`_${item.id}_${item.name}`} className={`container-header`}>
//           <h2>
//             id: {`${item.id}`} name: {`${item.name}`}{" "}
//           </h2>
//           <AccordionTree list={item.sub_tree.data} />
//         </div>
//       );
//     }
//     return (
//       <h4 key={`_${item.id}_${item.name}`}>
//         id: {`${item.id}`} name: {`${item.name}`}
//       </h4>
//     );
//   });
// };

// const TreeLineRoot = () => {
//   return <div className="tree-line-root" />;
// };

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
const tree1 = [1,2]
const tree2 = [1,2,3]
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
