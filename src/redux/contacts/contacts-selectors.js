export const getContacts = store => store.contacts.items;
export const getFilteredContacts = store => {
  const normalizedFilter = store.filter.toLowerCase();
  const result = store.contacts.items.filter(({ name, number }) => {
    const normalizedName = name.toLowerCase();
    return (
      normalizedName.includes(normalizedFilter) ||
      number.includes(normalizedFilter)
    );
  });
  return result;
};
