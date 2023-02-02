import {
  differenceInCalendarDays,
  isThisYear,
  getDay,
  addDays,
  addWeeks,
  format,
} from "date-fns";
import {
  LightModeOutlined as LightModeOutlinedIcon,
  WeekendOutlined as WeekendOutlinedIcon,
  DateRangeOutlined as DateRangeOutlinedIcon,
  DoNotDisturbAltOutlined as DoNotDisturbAltOutlinedIcon,
  EventOutlined as EventOutlinedIcon,
} from "@mui/icons-material";

//find next weekend's date
const findWeekendDate = (date) => {
  const delta = 6 - getDay(date);
  return addDays(date, delta);
};

//check how far in the future the date is

const isLessThanAWeekAway = (date) => {
  const delta = differenceInCalendarDays(date, new Date());
  return delta < 7;
};

const isCurrentYear = (date) => {
  return isThisYear(date);
};

//get the text format to show user their selected date
const generateDateButtonLabel = (date) => {
  if (date === null) {
    return "No due date";
  }
  if (date)
    if (isLessThanAWeekAway(date)) {
      return format(date, "EEEE");
    }
  if (isCurrentYear(date)) {
    return format(date, "d MMM");
  }

  return format(date, "d MMM y");
};

//dates
const dates = {
  tomorrow: addDays(new Date(), 1),
  laterThisWeek: addDays(new Date(), 2),
  thisWeekend: findWeekendDate(new Date()),
  nextWeek: addWeeks(new Date(), 1),
};

const quickDatesArr = [
  {
    name: "Tomorrow",
    icon: LightModeOutlinedIcon,
    date: dates.tomorrow,
    label: format(dates.tomorrow, "EEE"),
    color: "warning",
  },
  {
    name: "Later this week",
    icon: EventOutlinedIcon,
    date: dates.laterThisWeek,
    label: format(dates.laterThisWeek, "EEE"),
    color: "primary",
  },
  {
    name: "This weekend",
    date: dates.thisWeekend,
    icon: WeekendOutlinedIcon,
    label: format(dates.thisWeekend, "EEE"),
    color: "success",
  },
  {
    name: "Next week",
    icon: DateRangeOutlinedIcon,
    date: dates.nextWeek,
    label: format(dates.nextWeek, "EEE d MMM"),
    color: "primary",
  },
  {
    name: "No date",
    icon: DoNotDisturbAltOutlinedIcon,
    label: "",
    color: "info",
    date: null,
  },
];

export {
  quickDatesArr,
  dates,
  isLessThanAWeekAway,
  isCurrentYear,
  generateDateButtonLabel,
};
