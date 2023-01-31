import moment from "moment";
import {
  LightModeOutlined as LightModeOutlinedIcon,
  WeekendOutlined as WeekendOutlinedIcon,
  DateRangeOutlined as DateRangeOutlinedIcon,
  DoNotDisturbAltOutlined as DoNotDisturbAltOutlinedIcon,
  EventOutlined as EventOutlinedIcon,
} from "@mui/icons-material";

const findWeekendDate = (date) => {
  const delta = 6 - date.day();
  return date.add(delta, "days");
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
    description: dates.tomorrow.format("ddd"),
    color: "warning",
  },
  {
    name: "Later this week",
    icon: EventOutlinedIcon,
    description: dates.laterThisWeek.format("ddd"),
    color: "primary",
  },
  {
    name: "This weekend",
    icon: WeekendOutlinedIcon,
    description: dates.thisWeekend.format("ddd"),
    color: "success",
  },
  {
    name: "Next week",
    icon: DateRangeOutlinedIcon,
    description: dates.nextWeek.format("ddd D MMM"),
    color: "primary",
  },
  {
    name: "No date",
    icon: DoNotDisturbAltOutlinedIcon,
    description: "",
    color: "info",
  },
];

export { quickDatesArr, dates };
