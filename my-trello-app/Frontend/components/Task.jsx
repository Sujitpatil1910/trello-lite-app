// components/Task.jsx
import { Draggable } from 'react-beautiful-dnd';

export default function Task({ task, index }) {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          className="bg-white p-4 rounded shadow mb-2"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="font-semibold">{task.title}</p>
          <p className="text-sm text-gray-500">{task.description}</p>
        </div>
      )}
    </Draggable>
  );
}
