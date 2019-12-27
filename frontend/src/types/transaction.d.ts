type Transaction = {
  id: number;
  date: string;
  category: string[];
  amount: string;
  description: string;
};

type TransactionRecord = Transaction & { key: number | string };
