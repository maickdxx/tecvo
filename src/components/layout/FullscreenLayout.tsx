import { ReactNode } from "react";

interface FullscreenLayoutProps {
  children: ReactNode;
}

export function FullscreenLayout({ children }: FullscreenLayoutProps) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
