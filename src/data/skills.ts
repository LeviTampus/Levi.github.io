// Capability-oriented skill categories. Specific tools live inside the
// relevant experience and project entries rather than in a master tool list.
export interface SkillGroup {
  title: string;
  icon: string;
  blurb: string;
}

export const skillGroups: SkillGroup[] = [
  { title: 'Integrations', icon: '🔌', blurb: 'Connecting business systems end to end' },
  { title: 'APIs', icon: '🧩', blurb: 'REST, auth, payloads, and live testing' },
  { title: 'Automation', icon: '⚙️', blurb: 'Turning repetitive work into workflows' },
  { title: 'Troubleshooting', icon: '🔍', blurb: 'Reproducing and root-causing failures' },
  { title: 'Data & Logs', icon: '🗂️', blurb: 'Following the trail through SQL and logs' },
  { title: 'AI Agents', icon: '🤖', blurb: 'Applying agents to real support problems' },
  { title: 'SaaS Support', icon: '☁️', blurb: 'Supporting production software at scale' },
];
