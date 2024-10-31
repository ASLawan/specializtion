export const truncateName = (name) =>
  name.length > 15 ? `${name.slice(0, 15)}...` : name;
