/**
 * compact: true
 */
import { Button } from '@mdy/mdy-comp';
import { createStyles } from 'antd-style';
import { memo } from 'react';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
  `,
}));

const FlowControllerDemo = memo(() => {
  const { styles } = useStyles();
  return (
    <div className={styles.container}>
      <Button>Hello</Button>
    </div>
  );
});

export default FlowControllerDemo;
