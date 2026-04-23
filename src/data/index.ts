import accounts from "./accounts.json";
import alerts from "./alerts.json";
import categories from "./categories.json";
import transactions from "./transactions.json";
import type { Account } from "./types";

export type { Account };
export { accounts, categories, transactions, alerts };

export const db = {
  accounts,
  categories,
  transactions,
  alerts,

  // relações prontas
  getTransactionsFull: () =>
    transactions.map((t) => ({
      ...t,
      account: accounts.find((a) => a.id === t.accountId),
      category: categories.find((c) => c.id === t.categoryId),
    })),

  getTotalBalance: () => accounts.reduce((sum, a) => sum + a.balance, 0),

  getTotalIncome: () =>
    transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0),

  getTotalExpense: () =>
    transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0),
};
