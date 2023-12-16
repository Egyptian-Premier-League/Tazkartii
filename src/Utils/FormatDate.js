const formatBirthdate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

export default formatBirthdate;

// example if date =2023-12-15T10:30:00.000Z ==> 2023-12-15 , 10:30:00
export const formatDateAndTime = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toISOString().split("T")[0];
  const time = date.toTimeString().split(":").slice(0, 2).join(":");
  return [formattedDate, time];
};
