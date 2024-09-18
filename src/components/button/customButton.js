import { Button } from '@chakra-ui/react';
import styles from './button.module.scss'
const CustomButton = ({ onClick, onChange, children, isLoading, ...rest }) => {
    return (
        <Button
            onClick={onClick}
            onChange={onChange}
            isLoading={isLoading}
            {...rest}
            className={styles['default']}
        >
            {children}
        </Button>
    );
};

export default CustomButton;