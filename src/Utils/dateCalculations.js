
export const getDayOfWeek = (daysInFuture) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const todaysDate = new Date()
  return daysOfWeek[(todaysDate.getDay() + daysInFuture) % daysOfWeek.length]
  
}