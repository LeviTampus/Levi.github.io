// The three lanes on the projects index. Order here is the display order.
export type TrackId = 'n8n' | 'workato' | 'python';

export interface Track {
  id: TrackId;
  platform: 'n8n' | 'Workato' | 'Python';
  skill: string;
  note: string;
}

export const tracks: Track[] = [
  {
    id: 'n8n',
    platform: 'n8n',
    skill: 'Automation',
    note: 'Low-code, event-driven workflows and multi-agent flows, shipped in the tools ops teams already use.',
  },
  {
    id: 'workato',
    platform: 'Workato',
    skill: 'Agents at work',
    note: 'AI agents and integrations I build in my day job, described at a high level.',
  },
  {
    id: 'python',
    platform: 'Python',
    skill: 'From scratch',
    note: 'Agents, RAG, and fundamentals, written and owned by hand without framework shortcuts.',
  },
];

export const trackBySlot: Record<TrackId, Track> = {
  n8n: tracks[0],
  workato: tracks[1],
  python: tracks[2],
};
