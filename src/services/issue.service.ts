import type { CreateIssueDTO, Issue } from '../interfaces/issue.interface.js';
import { getCurrentTimestamp } from '../utils/date.util.js';

// Simulamos nuestra base de datos en memoria
const issuesDatabase: Issue[] = [];

export const saveIssue = async (data: CreateIssueDTO): Promise<Issue> => {
  // Armamos el objeto final
  const newIssue: Issue = {
    ...data,
    id: Math.random().toString(36).substring(2, 9),
    reportedAt: getCurrentTimestamp()
  }

  // Lo "guardamos"
  issuesDatabase.push(newIssue);
  console.log('Base de datos actual:', issuesDatabase);

  // Devolvemos el registro guardado
  return newIssue;
};

export const getAllIssues = async (): Promise<Issue[]> => {
  return issuesDatabase;
};
