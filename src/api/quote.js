/**
 * Mocking client-server processing
 */
 /* eslint-disable */
const _quotes = [
  {
    'id': 1,
    'content': 'Life is about making an impact, not making an income.',
    'person': 'Kevin Kruse',
    'is_favorite': false,
  },
  {
    'id': 2,
    'content': 'Whatever the mind of man can conceive and believe, it can achieve.',
    'person': 'Napoleon Hill',
    'is_favorite': false,
  },
  {
    'id': 3,
    'content': 'Strive not to be a success, but rather to be of value.',
    'person': 'Albert Einstein',
    'is_favorite': false,
  },
  {
    'id': 4,
    'content': 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
    'person': 'Robert Frost',
    'is_favorite': false,
  },
  {
    'id': 5,
    'content': 'I attribute my success to this: I never gave or took any excuse.',
    'person': 'Florence Nightingale',
    'is_favorite': false,
  },
];
/* eslint-enable */

export default {
  getQuotes(cb) {
    setTimeout(() => cb(_quotes), 100);
  },
  /* eslint-disable */
  markAsFavorite(id, cb, errorCb) {
    setTimeout(() => {
      console.log('from api not handled anything.')
      // const result = _quotes.filter(q => q.id === id).pop();
      // result.is_favorite = !result.is_favorite;
      // if (result) {
      //   result.is_favorite = !result.is_favorite;
      //   console.log('result is', result);
      //   cb(result);
      // } else {
      //   console.log('cannot markAsFavorite object id', id);
      // }
    }, 100);
  },
  /* eslint-enable */
};
