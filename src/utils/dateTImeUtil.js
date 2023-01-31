import moment from "moment";
import {
  LightModeOutlined as LightModeOutlinedIcon,
  WeekendOutlined as WeekendOutlinedIcon,
  DateRangeOutlined as DateRangeOutlinedIcon,
  DoNotDisturbAltOutlined as DoNotDisturbAltOutlinedIcon,
  EventOutlined as EventOutlinedIcon,
} from "@mui/icons-material";

//find next weekend's date
const findWeekendDate = (date) => {
  const delta = 6 - date.day();
  return date.add(delta, "days");
};

//check how far in the future the date is

const isLessThanAWeekAway = (date) => {
  const delta = date.diff(moment(), "days");
  return delta < 7;
};

const isSameYear = (date) => {
  return date.year() === moment().year();
};

//dates
const dates = {
  tomorrow: moment().add(1, "d"),
  laterThisWeek: moment().add(2, "days"),
  thisWeekend: findWeekendDate(moment()),
  nextWeek: moment().add(7, "d"),
};

const quickDatesArr = [
  {
    name: "Tomorrow",
    icon: LightModeOutlinedIcon,
    date: dates.tomorrow,
    label: dates.tomorrow.format("ddd"),
    color: "warning",
  },
  {
    name: "Later this week",
    icon: EventOutlinedIcon,
    date: dates.laterThisWeek,
    label: dates.laterThisWeek.format("ddd"),
    color: "primary",
  },
  {
    name: "This weekend",
    date: dates.thisWeekend,
    icon: WeekendOutlinedIcon,
    label: dates.thisWeekend.format("ddd"),
    color: "success",
  },
  {
    name: "Next week",
    icon: DateRangeOutlinedIcon,
    date: dates.nextWeek,
    label: dates.nextWeek.format("ddd D MMM"),
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

export { quickDatesArr, dates, isLessThanAWeekAway, isSameYear };
