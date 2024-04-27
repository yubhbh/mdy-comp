
import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  button: css`
    font-weight: 500;
    font-family: Noto Sans, sans-serif;
    color:  ${token.colorText};
    transition: background-color 100ms ${token.motionEaseOut};
  `,
}));