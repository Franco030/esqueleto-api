import type { Request, Response } from 'express'
import { saveIssue, getAllIssues } from '../services/issue.service.js'

export const createIssueController = async (req: Request, res: Response) => {
  try {
    const { partNumber, description, line } = req.body;

    if (!partNumber || !description || !line) {
      return res.status(400).json({
        success: false,
        error: 'Faltan datos obligatorios'
      });
    }

    const savedData = await saveIssue({ partNumber, description, line });

    res.status(201).json({
      success: true,
      data: savedData
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Error interno del servidor"
    });
  }
};

export const getIssuesController = async (req: Request, res: Response) => {
  try {
    const issues = await getAllIssues();

    res.status(200).json({
      success: true,
      count: issues.length,
      data: issues
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    })
  }
};
