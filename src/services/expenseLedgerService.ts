import { ExpenseRecord, DepartmentBudgetEnvelope, CurrencyCode } from '../types/expense';

/**
 * Enterprise Expense Ledger & Cashflow Analytics Contract
 * High-performance corporate ledger reconciliation interface.
 */
export interface IExpenseLedgerService {
  /**
   * Records and categorizes an incoming corporate operational expense
   */
  recordExpense(payload: Omit<ExpenseRecord, 'transactionId' | 'amountNormalizedUsd' | 'approvalStatus' | 'recordedAtIsoDate'>): Promise<ExpenseRecord>;

  /**
   * Normalizes expense values across international subsidiaries with historical FX rates
   */
  normalizeFxValuation(amount: number, fromCurrency: CurrencyCode, targetCurrency: CurrencyCode): Promise<number>;

  /**
   * Retrieves real-time department burn rates and checks budget envelope thresholds
   */
  evaluateDepartmentBudgetEnvelope(departmentId: string): Promise<DepartmentBudgetEnvelope>;

  /**
   * Approves and clears an audited transaction through corporate governance
   */
  clearTransaction(transactionId: string, auditorUserId: string): Promise<ExpenseRecord>;
}
