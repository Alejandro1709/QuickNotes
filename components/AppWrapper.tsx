interface IAppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: IAppWrapperProps) {
  return <div className='max-w-screen-lg mx-auto h-screen'>{children}</div>;
}
