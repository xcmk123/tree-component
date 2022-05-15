import './App.css';
const TASKS = [
  {
    id: 1,
    name: 'This is header 1',
    deadLine: '31/5/2021',
    role: 'HEADER',
    employee: {
      id: 'Mor_Hn_223',
      name: 'Hieu_Mor'
    },
    density: 50,
    process: 90,
    quality: 50,
    sub_tree: {
      role: 'SUB_OKR',
      data: [
        { 
          id: 1, name: 'This is SUB_OKR 1', 
          sub_tree: {
            role: 'KR',
            data: [
              { id: 1, name: 'This is KR 1', },
              { id: 2, name: 'This is KR 2', },
              { id: 3, name: 'This is KR 3', }
            ],
          }
        },
        // { id: 2, name: 'This is SUB_OKR 2' },
        // { id: 3, name: 'This is SUB_OKR 3' }
      ]
    }
  },
  {
    id: 1,
    name: 'This is header 2',
    deadLine: '31/5/2021',
    role: 'HEADER',
    employee: {
      id: 'Mor_Hn_223',
      name: 'Hieu_Mor'
    },
    density: 50,
    process: 90,
    quality: 50,
    sub_tree: {
      role: 'SUB_OKR',
      data: [
        { 
          id: 1, name: 'This is SUB_OKR 1', 
          sub_tree: {
            role: 'KR',
            data: [
              { id: 1, name: 'This is KR 1', },
              { id: 2, name: 'This is KR 2', },
              { id: 3, name: 'This is KR 3', }
            ],
          }
        },
        // { id: 2, name: 'This is SUB_OKR 2' },
        // { id: 3, name: 'This is SUB_OKR 3' }
      ]
    }
  }
] 
const AccordionTree = (props) => {
  console.log(props.list)
  return props.list.map(item => {
    if ( item.sub_tree ) {
      return (
        <div 
          key={`_${item.id}_${item.name}`} 
          className={`container-header`}
        >
          <h2>id: {`${item.id}`} name: {`${item.name}`} </h2>
          <AccordionTree list={item.sub_tree.data} />
        </div>
      )
    }
    return (
      <h4 key={`_${item.id}_${item.name}`}>id: {`${item.id}`} name: {`${item.name}`}</h4>
    )
  })
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <AccordionTree list={TASKS} /> */}
        <div className='container-header'>
          <div className="f-16 name-group">Level 1</div>
          <div className='container-content-group'>
            {
              [11,21,31].map(item =>     
                <div className="container-content" key={item}>
                  <div className='tree-line-mark'>
                  </div>
                  <div className='tree-line-mark-bg'/>
                  <div className='tree-node'>
                    <div className='container-header'>
                      <div className="f-16">Level 2</div>
                      <div className='container-content-group'>
                        {
                          [1,2,3].map((item) => 
                            <div className='container-content' key={item}>
                              <div className='tree-line-mark'></div>
                              <div className='tree-line-mark-bg'/>
                              <div className='tree-node'>
                                <div className='container-header'>
                                  <div className="f-16 tree-node-header">Level 3</div>
                                </div>
                              </div>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
