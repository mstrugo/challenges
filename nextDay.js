// Given a day and a number, return which day should be

var myFunc = (init, future) => {
  if (future === 0) {
    return(`shouldBe: ${init}`);
  }

  const days = ['lunes', 'martes', 'mierc', 'jueves', 'viernes', 'sabado', 'domingo'];
  const initDayOfWeek = days.indexOf(init);
  const splittedWeek = days.slice(initDayOfWeek);
  const splittedWeek2 = days.slice(0, initDayOfWeek);
  const reorderDays = [...splittedWeek, ...splittedWeek2];

  let futureDays = future;
  while (futureDays >= 7) {
    futureDays = futureDays - 7;
  }
  
  const shouldBe = reorderDays[futureDays];

  return(`shouldBe: ${shouldBe}`);
};
