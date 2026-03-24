export interface TutorialModuleData {
  id: string;
  title: string;
  description?: string;
  steps?: any[];
  icon?: any;
}

export function TutorialModule(props: any) { return <div>Tutorial</div>; }
