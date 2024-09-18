// draggableNode.js
import styles from './draggableNode.module.scss'

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <div
      className={`${styles[type]} ${styles.node}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      {icon && <img src={icon} alt={`${styles[type]} ${styles.icon}`} />}
      <span>{label}</span>
    </div>
  );
};
