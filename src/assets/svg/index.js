
      // {[1, 2].map((item, index) =>
      //   // OKR 
      //   <li key={index}>
      //     <Node rootNode={true}>
      //       <TitleSubTree title={`OKR ${item}`} />
      //     </Node>
      //     <ContainerNode lastSub={true}>
      //       <AddSubTree role="ork" />
      //       {tree1.map((item, index) => 
      //         // SUB_OKR
      //         <li key={index}>
      //           <Node lastSub={tree1.length === index + 1}>
      //             <TitleSubTree title={`SUB_OKR ${item}`} />
      //           </Node> 
      //           <ContainerNode lastSub={tree1.length === index + 1}>
      //             <AddSubTree role="kr" />
      //             {tree1.map((item, index) => 
      //               // KR
      //               <li key={index}>
      //                 <Node lastSub={tree1.length === index + 1}>
      //                   <TitleSubTree title={`KR ${item}`} />
      //                 </Node> 
      //                 <ContainerNode lastSub={tree1.length === index + 1}>
      //                   <AddSubTree role="task" />
      //                   {tree2.map((item, index) => 
      //                     // TASK
      //                     <li key={index}>
      //                       <Node lastSub={tree2.length === index + 1}>
      //                         <TitleSubTree title={`TASK ${item}`} />
      //                       </Node>
      //                     </li>
      //                   )}
      //                 </ContainerNode>
      //               </li>
      //             )}
      //           </ContainerNode>
      //         </li>
      //       )}
      //     </ContainerNode>
      //   </li>
      // )}