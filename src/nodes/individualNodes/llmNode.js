import { BaseNode } from '../common/baseNode';
import { llmNodeConfig } from '../nodeConfig/nodeConfigs';

export const LLMNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={llmNodeConfig} />;
};
