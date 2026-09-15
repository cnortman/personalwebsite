import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type ProjectStatus = NonNullable<Project['data']['status']>;

export const statusLabels: Record<ProjectStatus, string> = {
  live: 'Live',
  active: 'Active',
  building: 'Building',
  complete: 'Complete',
  archived: 'Archived',
};

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export const padIndex = (index: number) => String(index).padStart(2, '0');
