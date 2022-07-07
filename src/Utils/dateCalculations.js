
export const getDayOfWeek = (daysInFuture) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const todaysDate = new Date()
  console.log('day of week', daysOfWeek[(todaysDate.getDay() + daysInFuture) % daysOfWeek.length])
  return daysOfWeek[(todaysDate.getDay() + daysInFuture) % daysOfWeek.length]
  
}