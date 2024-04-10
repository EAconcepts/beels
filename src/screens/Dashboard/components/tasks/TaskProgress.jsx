
const TaskProgress = ({task}) => {
  return (
    <div className="flex flex-col ">
            <div className="flex justify-between w-full">
              <p className="text-[16px] pr-[4px] max-w-full font-poppins leading-[23.2px] font-[400] text-black">
                {task?.name}
              </p>
              <span className="text-[16px] font-poppins leading-[23.2px] font-[400] text-black">
                {/* {task?.value || 0}/{task.points} */}
              </span>
            </div>
            <progress
              max={task?.points}
              value={task?.points * 0.02}
              className="w-full"
            ></progress>
          </div>
  )
}

export default TaskProgress