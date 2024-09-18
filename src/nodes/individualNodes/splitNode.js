import { BaseNode } from '../common/baseNode';
import { splitNodeConfig } from '../nodeConfig/nodeConfigs';

export const SplitNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={splitNodeConfig} />;
};