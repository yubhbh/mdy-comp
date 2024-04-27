import { Button, ButtonProps } from 'antd';
import { useStyles } from './style';

export  default (props: ButtonProps) => {
  const { styles } = useStyles();
  return (
    <Button 
    className={styles.button}
    size={props.size || 'large'}
    {...props}
    >
      <>{props.children}</>
    </Button>
  );
}