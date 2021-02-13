
interface Props {
  months: string[],
  year: number,
  currMonth: string,
  prevDays: number[],
  currDays: number[],
  nextMonth(number),
  prevMonth(number),
  mn: number,
}

interface AProps {
  setDt: React.Dispatch<React.SetStateAction<Date>>
}