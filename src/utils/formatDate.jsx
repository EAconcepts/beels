  
export function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate().toString().padStart(2, '0'); // Ensure two-digit day
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ensure two-digit month (month is zero-based)
    const year = date.getFullYear().toString();
  
    return `${day}/${month}/${year}`;
  }