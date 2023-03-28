export const ErrorText = ({ children }: any) => {
  return <HelperText variant="danger">{children}</HelperText>;
};
const helpertTextClasses = new Map<string, string>([
  ["danger", "text-red-600"],
  ["link", "text-red-600"],
]);
interface HelperTextProps {
  children?: React.ReactNode;
  error?: boolean;
  className?: string;
  variant:
    | "default"
    | "primary"
    | "secondary"
    | "ghost"
    | "danger"
    | "success"
    | "grey"
    | "blue"
    | "link";
}
const HelperText: React.FC<HelperTextProps> = ({
  children,
  error,
  className = "",
  variant = "default",
  ...props
}) => {
  const classes = `mt-0 text-xs ${helpertTextClasses.get(
    variant
  )} ${className}`;

  return (
    <label className={classes} {...props}>
      {children}
    </label>
  );
};
