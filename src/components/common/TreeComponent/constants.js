
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
                data: []
              }
            },
            {
              title: 'SUB_OKR 2',
              subTree: {
                role: 'kr',
                data: []
              }
            }
          ]
        }
      },
    ]
  }
}