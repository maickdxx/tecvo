export type ChangeType = "feature" | "fix" | "improvement" | "update";

export interface ChangelogChange {
  type: string;
  description: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: ChangelogChange[];
  [key: string]: any;
}

export function ChangelogTimeline(props: any) { return <div>Timeline</div>; }
