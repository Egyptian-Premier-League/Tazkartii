const formatBirthdate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

export default formatBirthdate;
