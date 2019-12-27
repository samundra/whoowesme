const transformForFetch = (
  data: Transaction[]
): Array<Transaction & { key: number }> => {
  return data.map(d => {
    return {
      ...d,
      key: d.id,
    };
  });
};

const transaction = {
  fetchAll: (): TransactionRecord[] => {
    const data = [
      {
        id: 1,
        date: '2019-10-11',
        category: ['personal', 'gym'],
        amount: '22.00',
        description: 'Spending on grocery items',
        timestamp: 1,
      },
      {
        id: 2,
        date: '2019-10-11',
        category: ['personal', 'gym'],
        amount: '22.00',
        description: 'Spending on grocery items',
        timestamp: 2,
      },
      {
        id: 3,
        date: '2019-10-11',
        category: ['personal', 'gym'],
        amount: '22.00',
        description: 'Spending on grocery items',
        timestamp: 3,
      },
      {
        id: 4,
        date: '2019-10-11',
        category: ['personal', 'gym'],
        amount: '22.00',
        description: 'Spending on grocery items',
        timestamp: 4,
      },
    ];

    return transformForFetch(data);
  },
};

export default transaction;
