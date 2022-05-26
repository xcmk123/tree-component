import "./App.css";
import TreeComponent from "./components/common/TreeComponent";
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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TreeComponent />
      </header>
    </div>
  );
}

export default App;
