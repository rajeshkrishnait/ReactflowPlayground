import { BaseNode } from '../common/baseNode';
import { outputNodeConfig } from '../nodeConfig/nodeConfigs';

export const OutputNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={outputNodeConfig} />;
};