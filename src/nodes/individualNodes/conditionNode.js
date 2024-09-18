
import { BaseNode } from '../common/baseNode';
import { conditionNodeConfig } from '../nodeConfig/nodeConfigs';

export const ConditionNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={conditionNodeConfig} />;
};