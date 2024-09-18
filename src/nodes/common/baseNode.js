import { useState, useEffect, useCallback  } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { CloseButton } from "@chakra-ui/react";
import Textfield from "../../components/textField/textfield.js";
import CustomSelect from "../../components/select/customSelect.js";
import styles from "./baseNode.module.scss";
import { useStore } from "../../store/store.js";
import { calculateDynamicHandles } from "./utils/calculateDynamicHandles.js";
import NodeHandle from "./nodeHandle.js";

export const BaseNode = ({ id, data, config }) => {
  const [nodeState, setNodeState] = useState(data || {});
  const removeNode = useStore((state) => state.removeNode);
  const [dynamicHandles, setDynamicHandles] = useState([]);
  const updateNodeInternals = useUpdateNodeInternals();

  // Calculate dynamic handles and set state
  const updateHandles = useCallback(() => {
    const text = nodeState.text || "";
    const newHandles = calculateDynamicHandles(text, id);
    setDynamicHandles(newHandles);
  }, [nodeState.text, id]);

  useEffect(() => {
    updateHandles();
  }, [updateHandles]);

  // Update node internals when dynamicHandles change
  useEffect(() => {
    updateNodeInternals(id);
  }, [dynamicHandles, updateNodeInternals, id]);

  const handleChange = (field, value) => {
    setNodeState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClose = () => {
    removeNode(id);
  };

  const renderFields = () =>
    config.fields.map(({ label, type, field, options }) => {
      if (type === "text") {
        return (
          <label key={field}>
            {label}:
            <Textfield value={nodeState[field] || ""} onChange={(e) => handleChange(field, e.target.value)} />
          </label>
        );
      }

      if (type === "select") {
        return (
          <label key={field}>
            {label}:
            <CustomSelect
              options={options}
              placeholder="Choose an option"
              onChange={(e) => handleChange(field, e.target.value)}
              size="md"
            />
          </label>
        );
      }

      return null;
    });

  return (
    <div className={styles["node-root"]}>
      {dynamicHandles.map((handle) => (
        <NodeHandle
          key={handle.id}
          id={handle.id}
          type={handle.type}
          position={handle.position}
          style={handle.style}
        />
      ))}
      {config.handles.map((handle) => (
        <NodeHandle
          key={handle.id}
          id={handle.id}
          type={handle.type}
          position={handle.position}
          style={handle.style}
        />
      ))}
      <div className={styles["node-title"]}>
        <div><span>{config.label}</span><img src={config.icon} alt={`${id}-${config.label}`}/></div>
        
        <CloseButton onClick={handleClose} size="sm" />
      </div>
      <div>{renderFields()}</div>
    </div>
  );
};