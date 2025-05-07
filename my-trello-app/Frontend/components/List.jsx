// components/List.jsx
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

export default function List({ list, index }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">{list.name}</h3>

      <Droppable droppableId={list._id} type="task">
        {(provided) => (
          <div
            className="space-y-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {list.tasks.map((task, taskIndex) => (
              <Task key={task._id} task={task} index={taskIndex} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
