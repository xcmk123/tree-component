import { Fragment } from "react";
import "./App.css";
const TASKS = [
  {
    id: 1,
    name: "This is header 1",
    deadLine: "31/5/2021",
    role: "HEADER",
    employee: {
      id: "Mor_Hn_223",
      name: "Hieu_Mor",
    },
    density: 50,
    process: 90,
    quality: 50,
    sub_tree: {
      role: "SUB_OKR",
      data: [
        {
          id: 1,
          name: "This is SUB_OKR 1",
          sub_tree: {
            role: "KR",
            data: [
              { id: 1, name: "This is KR 1" },
              { id: 2, name: "This is KR 2" },
              { id: 3, name: "This is KR 3" },
            ],
          },
        },
        // { id: 2, name: 'This is SUB_OKR 2' },
        // { id: 3, name: 'This is SUB_OKR 3' }
      ],
    },
  },
  {
    id: 1,
    name: "This is header 2",
    deadLine: "31/5/2021",
    role: "HEADER",
    employee: {
      id: "Mor_Hn_223",
      name: "Hieu_Mor",
    },
    density: 50,
    process: 90,
    quality: 50,
    sub_tree: {
      role: "SUB_OKR",
      data: [
        {
          id: 1,
          name: "This is SUB_OKR 1",
          sub_tree: {
            role: "KR",
            data: [
              { id: 1, name: "This is KR 1" },
              { id: 2, name: "This is KR 2" },
              { id: 3, name: "This is KR 3" },
            ],
          },
        },
        // { id: 2, name: 'This is SUB_OKR 2' },
        // { id: 3, name: 'This is SUB_OKR 3' }
      ],
    },
  },
];
const AccordionTree = (props) => {
  console.log(props.list);
  return props.list.map((item) => {
    if (item.sub_tree) {
      return (
        <div key={`_${item.id}_${item.name}`} className={`container-header`}>
          <h2>
            id: {`${item.id}`} name: {`${item.name}`}{" "}
          </h2>
          <AccordionTree list={item.sub_tree.data} />
        </div>
      );
    }
    return (
      <h4 key={`_${item.id}_${item.name}`}>
        id: {`${item.id}`} name: {`${item.name}`}
      </h4>
    );
  });
};

const Node = ({ name, item, role = "header" }) => {
  return (
    <div className={`node ${role}`}>
      <TreeLineRoot />
      <div className="tree-line" />
      <p>
        {name} {item}
      </p>
    </div>
  );
};

const NodeOKR =({ name }) => {
  return (
    <div className={`node okr`}>
      <p>
        {name}
      </p>
    </div>
  );
};

const Nested = ({ children, isOKR = false }) => {
  return (
    <ul className="nested">
      <div className="node column">
        {/* { !isOKR && <TreeLineRoot /> } */}
        {children}
      </div>
    </ul>
  )
};

const TreeLineRoot = () => {
  return <div className="tree-line-root" />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          [
            'Day la okr 1',
            'Day la okr 2'
          ].map((okr, index) => 
            <Fragment key={index}>
              <NodeOKR name={okr} />
              <Nested>
                {
                  [1,2].map((subOKR, index) => 
                    <Fragment key={index}>
                      <Node name={`Sub OKR ${subOKR}`} />
                      <Nested>
                        <Node name="+ Thêm KR" role="add_sub" />
                        {
                          [1,2].map((kr, index) => 
                            <Fragment key={index}>
                              <Node name={`KR ${subOKR}.${kr}`} />
                              <Nested>
                                <Node name="+ Thêm task" role="add_sub" />
                                {
                                  [1,2].map((task, index) => 
                                    <Node name={`Task ${subOKR}.${kr}.${task}`} key={index} />
                                  )
                                }
                              </Nested>
                            </Fragment>
                          )
                        }
                      </Nested>
                    </Fragment>
                  )
                }
              </Nested>
            </Fragment>
          )
        }
      </header>
    </div>
  );
}

export default App;
