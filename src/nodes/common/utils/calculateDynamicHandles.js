export const calculateDynamicHandles = (text, nodeId) => {
    const regex = /\{\{(\w+)\}\}/g;
    const matches = [...text.matchAll(regex)];
    const numHandles = matches.length;
  
    const startTop = 50 - ((numHandles - 1) * 10) / 2;
    return matches.map((match, index) => ({
      id: `${nodeId}-${match[1]}`, // Ensure unique ID
      type: "target",
      position: "left",
      style: { top: `${startTop + index * 20}%`, left: "-1%" }, // Adjust position if needed
    }));
  };