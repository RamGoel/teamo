import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from 'moment'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calcDateDifference(date:string|Date) {

  var pastDate = moment(date);

  var differenceInDays = moment().diff(pastDate, 'days');

  var formattedResult = "";

  if (differenceInDays === 0) {
    formattedResult = "Today";
  } else if (differenceInDays === 1) {
    formattedResult = "Yesterday";
  } else {
    formattedResult = differenceInDays + "d ago";
  }

  return formattedResult
}