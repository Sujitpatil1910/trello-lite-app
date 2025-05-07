// components/DnDWrapper.jsx
'use client';
import { DragDropContext } from 'react-beautiful-dnd';

export default function DnDWrapper({ onDragEnd, children }) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {children}
    </DragDropContext>
  );
}
