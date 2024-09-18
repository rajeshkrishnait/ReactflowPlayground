// toolbar.js
import { DraggableNode } from '../draggableNode/draggableNode';
import iconMapping from '../../configs/toolbarIconMapping'; // Adjust the path as necessary
import styles from './toolbar.module.scss';

export const PipelineToolbar = () => {
    return (
        <div className={styles.toolbar}>
            <DraggableNode type='customInput' label='Input' icon={iconMapping['input']} />
            <DraggableNode type='llm' label='LLM' icon={iconMapping['llm']} />
            <DraggableNode type='customOutput' label='Output' icon={iconMapping['output']} />
            <DraggableNode type='text' label='Text' icon={iconMapping['text']} />
            <DraggableNode type='action' label='Action' icon={iconMapping['action']} />
            <DraggableNode type='condition' label='Condition' icon={iconMapping['condition']} />
            <DraggableNode type='merge' label='Merge' icon={iconMapping['merge']} />
            <DraggableNode type='split' label='Split' icon={iconMapping['split']} />
            <DraggableNode type='log' label='Log' icon={iconMapping['log']} />
        </div>
    );
};