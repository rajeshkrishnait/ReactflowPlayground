import { Handle } from "reactflow";

const NodeHandle = ({ id, type, position, style }) => (
  <Handle
    type={type}
    position={position}
    id={id}
    style={style}
  />
);

export default NodeHandle;