
import { BaseNode } from '../common/baseNode';
import { logNodeConfig } from '../nodeConfig/nodeConfigs';

export const LogNode = ({ id, data }) => {
  return <BaseNode id={id} data={data} config={logNodeConfig} />;
};