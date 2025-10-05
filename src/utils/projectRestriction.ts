import { default as env } from 'env-var';

export function checkProjectRestriction(projectIdOrKey: string | number | undefined): void {
  const allowedProjectId = env.get('BACKLOG_PROJECT_ID').asString();
  if (!allowedProjectId) return;
  if (!projectIdOrKey || projectIdOrKey.toString() !== allowedProjectId) {
    throw new Error(`Access restricted to project ID: ${allowedProjectId}`);
  }
}
