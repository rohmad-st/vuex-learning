/* eslint-disable */
export const favoriteQuotes = (state) => {
  return state.favorite.added.map(({ id, quantity }) => {
    const quote = state.quotes.all.find(p => p.id === id);
    return {
      content: quote.content,
      people: quote.people,
      quantity,
    };
  });
};

/* eslint-enable */
