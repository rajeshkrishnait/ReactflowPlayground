
import { BaseNode } from '../common/baseNode';
import { actionNodeConfig } from '../nodeConfig/nodeConfigs';

export const ActionNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={actionNodeConfig} />;
};