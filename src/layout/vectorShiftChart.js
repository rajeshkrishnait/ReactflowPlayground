import React, { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";

import { getInitNodeData } from "../utils/nodeUtils.js";

import { useStore } from "../store/store.js";
import { shallow } from "zustand/shallow";

import { InputNode } from "../nodes/individualNodes/inputNode.js";
import { LLMNode } from "../nodes/individualNodes/llmNode.js";
import { OutputNode } from "../nodes/individualNodes/outputNode.js";
import { TextNode } from "../nodes/individualNodes/textNode.js";
import { ActionNode } from "../nodes/individualNodes/actionNode.js";
import { ConditionNode } from "../nodes/individualNodes/conditionNode.js";
import { MergeNode } from "../nodes/individualNodes/mergeNode.js";
import { SplitNode } from "../nodes/individualNodes/splitNode.js";
import { LogNode } from "../nodes/individualNodes/logNode.js";
import CustomButton from "../components/button/customButton.js";

import { useMutation } from "@tanstack/react-query";
import { submitPipeline } from "../services/pipelineService";

import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  action: ActionNode,
  condition: ConditionNode,
  merge: MergeNode,
  split: SplitNode,
  log: LogNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  removeNode: state.removeNode,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

        // check if the dropped element is valid
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    console.log(useStore.getState().nodes);
  }, []);

  const mutation = useMutation({
    mutationFn: submitPipeline,
    onSuccess: (result) => {
      alert(
        `Number of nodes: ${result.num_nodes}\nNumber of edges: ${result.num_edges}\nIs DAG: ${result.is_dag}`
      );
    },
    onError: () => {
      alert("Failed to submit pipeline");
    },
  });

  const handleSubmit = () => {
    mutation.mutate({ nodes, edges });
  };
  return (
    <React.Fragment>
      <div ref={reactFlowWrapper} style={{ width: "100vw", height: "70vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
        >
          <Background color="#aaa" gap={gridSize} />
          <Controls />
          <MiniMap
            style={{
              backgroundColor: "#283046", // Dark background for the MiniMap
            }}
            nodeStrokeColor={(n) => {
              switch (n.type) {
                case 'customInput':
                  return "#0041d0"; // Blue for Input nodes
                case 'llm':
                  return "#00bfae"; // Teal for LLM nodes
                case 'customOutput':
                  return "#ff0072"; // Pink for Output nodes
                case 'text':
                  return "#ffa500"; // Orange for Text nodes
                case 'action':
                  return "#ff5722"; // Deep Orange for Action nodes
                case 'condition':
                  return "#4caf50"; // Green for Condition nodes
                case 'merge':
                  return "#3f51b5"; // Indigo for Merge nodes
                case 'split':
                  return "#9c27b0"; // Purple for Split nodes
                case 'log':
                  return "#795548"; // Brown for Log nodes
                default:
                  return "#fff"; // Default white for unknown types
              }
            }}
            nodeColor={(n) => {
              switch (n.type) {
                case 'customInput':
                  return "#e3f2fd"; // Light Blue for Input nodes
                case 'llm':
                  return "#b2dfdb"; // Light Teal for LLM nodes
                case 'customOutput':
                  return "#f8bbd0"; // Light Pink for Output nodes
                case 'text':
                  return "#ffe0b2"; // Light Orange for Text nodes
                case 'action':
                  return "#ffccbc"; // Light Deep Orange for Action nodes
                case 'condition':
                  return "#c8e6c9"; // Light Green for Condition nodes
                case 'merge':
                  return "#c5cae9"; // Light Indigo for Merge nodes
                case 'split':
                  return "#d1c4e9"; // Light Purple for Split nodes
                case 'log':
                  return "#d7ccc8"; // Light Brown for Log nodes
                default:
                  return "#fff"; // Default white for unknown types
              }
            }}
          />

        </ReactFlow>
      </div>
      <CustomButton
        onClick={handleSubmit}
        isLoading={mutation.isLoading}
        colorScheme="blue"
      >
        {mutation.isLoading ? "Submitting..." : "Submit"}
      </CustomButton>
    </React.Fragment>
  );
};
