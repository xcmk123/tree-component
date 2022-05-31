
export const ROLE = {
  subOkr:  'Thêm sub OKR',
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
  subtree: {
    role: 'okr',
    data: [
      {
        _id: 'zad2132145t24524',
        title: 'Triển khai khai báo timesheet trong toàn tập đoàn',
        deadline: '31/12/21',
        employee: 'Hien.ta',
        density: '50',
        process: '50',
        quality: '50',
        subtree: {
          role: 'subOkr',
          data: [
            {
              title: 'Triển khai và xây dựng cơ chế',
              deadline: '31/12/21',
              density: '50',
              process: '50',
              quality: '50',
              subtree: {
                role: 'kr',
                data: [
                  {
                    title: 'Lập kế hoạch triển khai và các mẫu biểu',
                    employee: 'Hien.ta',
                    deadline: '31/12/21',
                    density: '50',
                    process: '50',
                    quality: '50',
                    subtree: {
                      role: 'task',
                      data: [
                        {
                          title: 'Lập kế hoạch triển khai và các mẫu biểu',
                          employee: 'Minh.tang',
                          deadline: '31/12/21',
                          density: '50',
                          process: '50',
                          quality: '50',
                        },
                      ]
                    }
                  },
                ]
              }
            },
            {
              title: 'Chuẩn hóa danh mục công việc',
              employee: 'Minh.tang',
              deadline: '31/12/21',
              density: '50',
              process: '50',
              quality: '50',
              subtree: {
                role: 'kr',
                data: [
                  {
                    title: 'Triển khai xây dựng danh mục công việc của MKT, SC',
                    employee: 'Minh.tang',
                    deadline: '31/12/21',
                    density: '50',
                    process: '50',
                    quality: '50',
                    subtree: {
                      role: 'task',
                      data: [
                        {
                          title: 'Họp triển khai với MKT, SC',
                          employee: 'Minh.tang',
                          deadline: '31/12/21',
                          density: '50',
                          process: '50',
                          quality: '50',
                        },
                        {
                          title: 'MKT khai báo danh mục công việc',
                          employee: 'Minh.tang',
                          deadline: '31/12/21',
                          density: '50',
                          process: '50',
                          quality: '50',
                        },
                        {
                          title: 'SC khai báo danh mục công việc',
                          employee: 'Minh.tang',
                          deadline: '31/12/21',
                          density: '50',
                          process: '50',
                          quality: '50',
                        },
                        {
                          title: 'Đánh giá, thẩm định danh mục công việc',
                          employee: 'Minh.tang',
                          deadline: '31/12/21',
                          density: '50',
                          process: '50',
                          quality: '50',
                        }
                      ]
                    }
                  },
                ]
              }
            }
          ]
        }
      },
      {
        title: 'Tỷ lệ hài lòng của khách hàng nội bộ đạt 100%',
        subtree: {
          role: 'subOkr',
          data: []
        }
      },
      {
        title: 'Tăng trưởng doanh thu năm 2022 đạt 50% so với trung bình 3 năm gần nhất',
        subtree: {
          role: 'subOkr',
          data: []
        }
      }
    ]
  }
}