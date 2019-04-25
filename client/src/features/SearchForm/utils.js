export const formatedQuery = query => {
  return query
    ? JSON.parse('{"' + query.replace(/&/g, '", "').replace(/=/g, '":"') + '"}')
    : undefined;
};
