
import { BaseNode } from '../common/baseNode';
import { mergeNodeConfig } from '../nodeConfig/nodeConfigs';

export const MergeNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={mergeNodeConfig} />;
};