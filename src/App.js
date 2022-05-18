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
        <ul className='nested tree'>
          <p>OKR 1</p>
          {
            [1,2,3].map((item,index) => 
              <ul className="nested" key={index}>
                <div className='node column'>
                  <div className='tree-line-root' />
                  <div className='node header'>
                    <div className='tree-line' />
                    <p>Them sub okr</p>
                  </div>
                </div>
                <div className='node column'>
                  <div className='tree-line-root' />
                    <div className='node header'>
                      <div className='tree-line' />
                      <p>SUB_OKR 1.1</p>
                    </div>
                    <ul className="nested">
                      <div className='node column'>
                        <div className='tree-line-root' />
                        <div className='node header'>
                          <div className='tree-line' />
                          <p>Them sub kr</p>
                        </div>
                      </div>
                      <li className='node column'>
                        <div className='tree-line-root' />
                        <li className='node header'>
                          <div className='tree-line' />
                          <p>KR 1.3.1</p>
                        </li>
                        {
                          index === 1 && 
                            <ul>
                              <p>task 1.3.1-1</p>
                              <p>task 1.3.1-2</p>
                              <p>task 1.3.1-3</p>
                            </ul>
                        }
                      </li>
                      <li className='node header'>
                        <div className='tree-line-root' />
                        <li className='node header'>
                          <div className='tree-line' />
                          <p>KR 1.3.2</p>
                        </li>
                      </li>
                      <li className='node header'>
                        <div className='tree-line-root' />
                        <li className='node header'>
                          <div className='tree-line' />
                          <p>KR 1.3.3</p>
                        </li>
                      </li>
                    </ul>
                </div>
              </ul>
            )
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
