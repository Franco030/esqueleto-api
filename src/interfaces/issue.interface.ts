// Define exactamente que nos debe enviar el usuario
export interface CreateIssueDTO {
  partNumber: string;
  description: string;
  line: string;
};

// Define como se ve el hallazgo ya guardado en nuestro sistema
export interface Issue extends CreateIssueDTO {
  id: string;
  reportedAt: string;
};
