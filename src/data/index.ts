import accounts from "./accounts.json";
import alerts from "./alerts.json";
import categories from "./categories.json";
import transactions from "./transactions.json";
import type { Account, Alert } from "./types";

export { accounts, alerts, categories, transactions };
export type { Account, Alert };

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

  getTopExpenseCategories: () => {
    const totals: Record<
      string,
      { category: (typeof categories)[0]; total: number }
    > = {};

    transactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        const category = categories.find((c) => c.id === t.categoryId);
        if (!category) return;

        if (!totals[category.id]) {
          totals[category.id] = { category, total: 0 };
        }

        totals[category.id].total += Math.abs(t.amount);
      });

    return Object.values(totals).sort((a, b) => b.total - a.total);
  },
};
