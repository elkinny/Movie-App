export const _formatedQuery = query => {
  return JSON.parse('{"' + query.replace(/&/g, '", "').replace(/=/g, '":"') + '"}');
};
