import { BaseNode } from '../common/baseNode';
import { textNodeConfig } from '../nodeConfig/nodeConfigs';

export const TextNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={textNodeConfig} />;
};