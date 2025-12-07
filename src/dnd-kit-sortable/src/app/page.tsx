'use client';

import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useEffect, useState } from 'react';

export default function IndexPage() {
  const [sortedCourseList, setSortedCourseList] = useState<
    {
      id: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    const array = [];

    for (let i = 0; i < 10; ++i) {
      array.push({
        id: String(i),
        label: String(i),
      });
    }

    setSortedCourseList(array);
  }, []);

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (active && over) {
      const oldIndex = sortedCourseList.findIndex((item) => item.id === active.id);
      const newIndex = sortedCourseList.findIndex((item) => item.id === over.id);
      const newItems = [...sortedCourseList];

      setSortedCourseList(arrayMove(newItems, oldIndex, newIndex));
    }
  }

  return (
    <div>
      <DndContext
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={sortedCourseList}>
          {sortedCourseList.map((box) => {
            return <SortableItem key={box.id} id={box.id} label={box.label} />;
          })}
        </SortableContext>
      </DndContext>
    </div>
  );
}

function SortableItem({ id, label }: { id: string; label: string }) {
  const [now, setNow] = useState(performance.now());
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  useEffect(() => {
    if (transform) {
      setNow(performance.now());
    }
  }, [transform]);

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={{
        background: isDragging ? '#82B1FF' : '#2962FF',
        color: isDragging ? '#212121' : '#FAFAFA',
        cursor: isDragging ? 'grabbing' : 'grab',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 16,
        position: 'relative',
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 1 : 'auto',
      }}
    >
      <div>{label}</div>
      <div style={{ fontSize: 10 }}>update: {now}</div>
    </div>
  );
}
