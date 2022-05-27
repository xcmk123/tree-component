
export const ROLE = {
  ork:  'Thêm sub OKR',
  kr: 'Thêm KR',
  task: 'Thêm Task'
}

export const ROLE_LIST = {
  okr: 'OKR',
  subOkr: 'SubOkr',
  kr: 'KR',
  task: 'Task'
}

export const RESULTS = {
  title: '',
  subTree: {
    role: 'okr',
    data: [
      {
        title: 'OKR 1',
        subTree: {
          role: 'subOkr',
          data: [
            {
              title: 'SUB_OKR 1',
              subTree: {
                role: 'kr',
                data: [
                  {
                    title: 'KR_1',
                    subTree: {
                      role: 'task',
                      data: [
                        {
                          title: 'Task 1',
                        },
                        {
                          title: 'Task 2',
                        },
                        {
                          title: 'Task 3',
                        },
                      ]
                    }
                  },
                  {
                    title: 'KR_2',
                    subTree: {
                      role: 'task',
                      data: [
                        {
                          title: 'Task 1',
                        },
                        {
                          title: 'Task 2',
                        },
                        {
                          title: 'Task 3',
                        },
                      ]
                    }
                  }
                ]
              }
            },
            {
              title: 'SUB_OKR 2',
              subTree: {
                role: 'kr',
                data: [
                  {
                    title: 'KR_1',
                    subTree: {
                      role: 'task',
                      data: [
                        {
                          title: 'Task 1',
                        },
                        {
                          title: 'Task 2',
                        },
                        {
                          title: 'Task 3',
                        },
                      ]
                    }
                  },
                  {
                    title: 'KR_2',
                    subTree: {
                      role: 'task',
                      data: [
                        {
                          title: 'Task 1',
                        },
                        {
                          title: 'Task 2',
                        },
                        {
                          title: 'Task 3',
                        },
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
    ]
  }
}