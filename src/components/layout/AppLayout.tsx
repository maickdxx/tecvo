import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
  [key: string]: any;
}

export function AppLayout({ children, title }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
        {children}
      </div>
    </div>
  );
}
