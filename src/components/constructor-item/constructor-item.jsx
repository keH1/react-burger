import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styles from './constructor-item.module.css';

const ConstructorItem = ({ item, index, moveItem, type }) => {
    const ref = React.useRef(null);

    const [, drop] = useDrop({
        accept: 'constructor-item',
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveItem({ dragIndex: draggedItem.index, hoverIndex: index });
                draggedItem.index = index;
            }
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'constructor-item',
        item: { type: 'constructor-item', index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <div ref={ref} className={styles.item} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <span>{item.name} {type}</span>
        </div>
    );
};

export default ConstructorItem;
