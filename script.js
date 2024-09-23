const data = {
  metadata: [
    {
      company_id: "111",
      name: "Oracle Corporation",
      ticker_symbol: "ORCL",
    },
    {
      company_id: "222",
      name: "Chevron Corporation",
      ticker_symbol: "CVX",
    },
    {
      company_id: "333",
      name: "Bank of America Corporation",
      ticker_symbol: "BAC",
    },
  ],
  raw: [
    {
      company_id: "111",
      trading_item_id: "T326411756",
      calendar_year: 2024,
    },
    {
      company_id: "222",
      trading_item_id: "T7868639",
      calendar_year: 2024,
    },
    {
      company_id: "333",
      trading_item_id: "T60672515",
      calendar_year: 2024,
    },
  ],
  score: [
    {
      company_id: "111",
      trading_item_id: "T326411756",
      calendar_year: 2024,
    },
    {
      company_id: "222",
      trading_item_id: "T7868639",
      calendar_year: 2024,
    },
    {
      company_id: "333",
      trading_item_id: "T7868639",
      calendar_year: 2024,
    },
  ],
};

const combineData = (data) => {
  const retArr = data.metadata.map((meta) => {
    const scoreData = data.score.find(
      (item) => item.company_id === meta.company_id
    );
    const rawData = data.score.find(
      (item) => item.company_id === meta.company_id
    );

    return {
      metadata: {
        name: meta.name,
        ticker_symbol: meta.ticker_symbol,
      },
      score: {
        trading_item_id: scoreData.trading_item_id,
        calendar_year: scoreData.calendar_year,
      },
      raw: {
        trading_item_id: rawData.trading_item_id,
        calendar_year: rawData.calendar_year,
      },
    };
  });

  return retArr;
};

console.log(combineData(data));
