import style from "./style.module.scss"

const CONTENT_APPROVE = {
  success: 'Đã Phê duyệt',
  progress: 'Chưa phê duyệt',
}

const CONTENT_OF_TASK = {
  success: 'Đã hoàn thành',
  progress: 'Đang triển khai',
  danger: 'Đã đóng'
}

const ROLE_CONTENT = {
  task: CONTENT_OF_TASK,
  approve: CONTENT_APPROVE
}
const Label = ({status, role}) => {
  return (
    <div 
      className={`
        ${style.label} 
        ${style[status]}
      `}
    >
      <span>
        {ROLE_CONTENT[role][status]}
      </span>
    </div>
  )
}
export default Label