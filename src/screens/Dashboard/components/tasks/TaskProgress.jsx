import React from 'react'

const TaskProgress = ({task}) => {
  return (
    <div className="flex flex-col ">
            <div className="flex justify-between w-full">
              <p className="text-[16px] font-poppins leading-[23.2px] font-[400] text-black">
                {task.title}
              </p>
              <span className="text-[16px] font-poppins leading-[23.2px] font-[400] text-black">
                {task.value}/{task.max}
              </span>
            </div>
            <progress
              max={task.max}
              value={task.value}
              className="w-full"
            ></progress>
          </div>
  )
}

export default TaskProgress