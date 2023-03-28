export interface containerProps {
  children?: React.ReactNode;
}
export default function Container({ children }: containerProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}
