/**
 * Corporate Expense and Financial Ledger Type Definitions
 */

export type CurrencyCode = 'SAR' | 'EGP' | 'AED' | 'USD' | 'EUR';

export interface ExpenseRecord {
  transactionId: string;
  departmentId: string;
  submitterUserId: string;
  expenseCategory: 'INFRASTRUCTURE' | 'TRAVEL' | 'EQUIPMENT' | 'OPERATIONS';
  amountOriginal: number;
  currencyOriginal: CurrencyCode;
  amountNormalizedUsd: number;
  vatAmount: number;
  receiptAttachmentUrl?: string;
  approvalStatus: 'PENDING' | 'DEPT_APPROVED' | 'CLEARED' | 'REJECTED';
  recordedAtIsoDate: string;
}

export interface DepartmentBudgetEnvelope {
  departmentId: string;
  departmentName: string;
  monthlyCapUsd: number;
  currentBurnRateUsd: number;
  isApproachingThreshold: boolean;
}
