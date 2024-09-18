import { BaseNode } from '../common/baseNode';
import { inputNodeConfig } from '../nodeConfig/nodeConfigs';

export const InputNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={inputNodeConfig} />;
};