

interface PanelProps {
  position?: PanelPosition;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default (props: PanelProps) => {
  const { position = 'top-left', children } = props;

  return <div position={position}>{children} A Test Code</div>;
};
