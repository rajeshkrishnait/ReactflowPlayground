import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import { addEdge, applyNodeChanges, applyEdgeChanges, MarkerType } from 'reactflow';

export const useStore = create(devtools((set, get) => {
  const updateNodeIDs = (type) => {
    const newIDs = { ...get().nodeIDs };
    if (!newIDs[type]) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  };

  const removeNode = (nodeId) => {
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== nodeId),
      edges: state.edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId)
    }));
  };

  const addNode = (node) => {
    set((state) => ({
      nodes: [...state.nodes, node]
    }));
  };

  const onNodesChange = (changes) => {
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
    }));
  };

  const onEdgesChange = (changes) => {
    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    }));
  };

  const onConnect = (connection) => {
    set((state) => ({
      edges: addEdge({
        ...connection,
        type: 'smoothstep',
        animated: true,
        markerEnd: { type: MarkerType.Arrow, height: '20px', width: '20px' }
      }, state.edges),
    }));
  };

  const updateNodeField = (nodeId, fieldName, fieldValue) => {
    set((state) => ({
      nodes: state.nodes.map((node) => {
        if (node.id === nodeId) {
          return { ...node, data: { ...node.data, [fieldName]: fieldValue } };
        }
        return node;
      }),
    }));
  };

  return {
    nodes: [],
    edges: [],
    nodeIDs: {},
    getNodeID: updateNodeIDs,
    removeNode,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
    updateNodeField,
  };
}), { name: 'nodeStore' });
