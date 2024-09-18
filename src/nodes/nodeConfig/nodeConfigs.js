import { Position } from 'reactflow';

import inputIcon from '../../assets/icons/input.svg';
import outputIcon from '../../assets/icons/output.svg';
import textIcon from '../../assets/icons/text.svg';
import LLMicon from '../../assets/icons/LLM.svg';
import actionIcon from '../../assets/icons/action.svg';
import logIcon from '../../assets/icons/log.svg';
import splitIcon from '../../assets/icons/split.svg';
import conditionIcon from '../../assets/icons/condition.svg';
import mergeIcon from '../../assets/icons/merge.svg';

export const inputNodeConfig = {
  label: 'Input',
  icon: inputIcon,
  fields: [
    { label: 'Name', type: 'text', field: 'inputName' },
    {
      label: 'Type',
      type: 'select',
      field: 'inputType',
      options: [
        { value: 'text', label: 'text' },
        { value: 'file', label: 'file' },
      ],
    },
  ],
  handles: [
    { id: 'value', type: 'source', position: Position.Right },
  ],
};

export const llmNodeConfig = {
  label: 'LLM',
  icon: LLMicon,
  fields: [],
  handles: [
    { id: 'system', type: 'target', position: Position.Left, style: { top: '33%' } },
    { id: 'prompt', type: 'target', position: Position.Left, style: { top: '66%' } },
    { id: 'response', type: 'source', position: Position.Right },
  ],
};

export const outputNodeConfig = {
  label: 'Output',
  icon: outputIcon,
  fields: [
    { label: 'Name', type: 'text', field: 'outputName' },
    {
      label: 'Type',
      type: 'select',
      field: 'outputType',
      options: [
        { value: 'text', label: 'text' },
        { value: 'file', label: 'file' },
      ],
    },
  ],
  handles: [
    { id: 'value', type: 'target', position: Position.Left },
  ],
};

export const textNodeConfig = {
  label: 'Text',
  icon: textIcon,
  style: { width: 200, height: 'auto', border: '1px solid black' },
  fields: [
    { label: 'Text', type: 'text', field: 'text' },
  ],
  handles: [
    { id: 'response', type: 'source', position: Position.Right },
  ],
};

export const actionNodeConfig = {
  label: 'Action',
  icon: actionIcon,
  fields: [
    { label: 'Action Name', type: 'text', field: 'actionName' },
    {
      label: 'Action Type',
      type: 'select',
      field: 'actionType',
      options: [
        { value: 'start', label: 'Start' },
        { value: 'stop', label: 'Stop' },
      ],
    },
  ],
  handles: [
    { id: 'input', type: 'target', position: Position.Left, style: { top: '50%' } },
    { id: 'output', type: 'source', position: Position.Right, style: { top: '50%' } },
  ],
};

export const conditionNodeConfig = {
  label: 'Condition',
  icon: conditionIcon,
  fields: [
    { label: 'Condition Text', type: 'text', field: 'conditionText' },
  ],
  handles: [
    { id: 'true', type: 'source', position: Position.Bottom, style: { left: '25%' } },
    { id: 'false', type: 'source', position: Position.Bottom, style: { left: '75%' } },
    { id: 'input', type: 'target', position: Position.Top, style: { top: '10%' } },
  ],
};

export const mergeNodeConfig = {
  label: 'Merge',
  icon: mergeIcon,
  fields: [],
  handles: [
    { id: 'input1', type: 'target', position: Position.Left, style: { top: '25%' } },
    { id: 'input2', type: 'target', position: Position.Left, style: { top: '75%' } },
    { id: 'output', type: 'source', position: Position.Right, style: { top: '50%' } },
  ],
};

export const splitNodeConfig = {
  label: 'Split',
  icon: splitIcon,
  fields: [
    { label: 'Split Value', type: 'text', field: 'splitValue' },
  ],
  handles: [
    { id: 'input', type: 'target', position: Position.Left, style: { top: '50%' } },
    { id: 'output1', type: 'source', position: Position.Right, style: { top: '25%' } },
    { id: 'output2', type: 'source', position: Position.Right, style: { top: '75%' } },
  ],
};

export const logNodeConfig = {
  label: 'Log',
  icon: logIcon,
  fields: [
    { label: 'Log Message', type: 'text', field: 'logMessage' },
  ],
  handles: [
    { id: 'input', type: 'target', position: Position.Left, style: { top: '50%' } },
    { id: 'output', type: 'source', position: Position.Right, style: { top: '50%' } },
  ],
};
