export function formatARS(amount: number) {
    return amount.toLocaleString('es-ar', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    });
  }

  export function getFormattedDate(timestamp: number) {
    const date = new Date(timestamp);
  
    const dayOfMonth = date.getDate();
    const monthNames = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const monthName = monthNames[date.getMonth()];
  
    return `${dayOfMonth} de ${monthName}`;
  }
  
  
  
  
  
  
