import { Fragment } from "react";
import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import ModalContext from "./context/ModalContext";
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <button onClick={() => setOpen({...isOpen, modal1: true })}>Open dialog 1</button> */}
      <ModalContext>
        <Fragment>
          <Modal>
            {
              ({ open, handleToggleModal, index }) => {
                console.log(handleToggleModal)
                return <Fragment>
                  <h3>Modal 1: {index}</h3>
                  <button onClick={() => handleToggleModal(index)}>Close Dialog</button>
                </Fragment>
              }
            }
          </Modal>
          <Modal>
            {
              props => 
              <h3 style={{ display: 'none' }}>Modal 1</h3>
            }
          </Modal>
        </Fragment>
      </ModalContext>
      </header>
    </div>
  );
}

export default App;
