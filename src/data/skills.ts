// Capability-oriented skill categories shown as a hairline tile row on the home page.
import { skillIcons } from './skillIcons';

export interface SkillGroup {
  title: string;
  svg: string;
}

export const skillGroups: SkillGroup[] = [
  { title: 'Integrations', svg: skillIcons.Integrations },
  { title: 'APIs', svg: skillIcons.APIs },
  { title: 'Automation', svg: skillIcons.Automation },
  { title: 'Troubleshooting', svg: skillIcons.Troubleshooting },
  { title: 'Data & Logs', svg: skillIcons['Data & Logs'] },
  { title: 'AI Agents', svg: skillIcons['AI Agents'] },
  { title: 'SaaS Support', svg: skillIcons['SaaS Support'] },
  { title: 'Documentation', svg: skillIcons.Documentation },
  { title: 'Communication', svg: skillIcons.Communication },
  { title: 'Customer Success', svg: skillIcons['Customer Success'] },
];
