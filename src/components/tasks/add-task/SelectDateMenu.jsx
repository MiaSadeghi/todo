import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
  TextField,
  Menu,
  FormControl,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import {
  LightModeOutlined as LightModeOutlinedIcon,
  WeekendOutlined as WeekendOutlinedIcon,
  DateRangeOutlined as DateRangeOutlinedIcon,
  DoNotDisturbAltOutlined as DoNotDisturbAltOutlinedIcon,
  EventOutlined as EventOutlinedIcon,
  EventBusy as EventBusyIcon,
} from "@mui/icons-material";
import { StaticDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import moment from "moment";
import { findWeekendDate } from "../../../utils/dateTImeUtil";

const SelectDateMenu = ({ open, anchorEl, setSelectedDate }) => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const changeDate = (e) => {
    setDate(e.format("YYYY-MM-DD"));
  };

  //dates
  const tomorrow = moment().add(1, "d");
  const laterThisWeek = moment().add(2, "days");
  const thisWeekend = findWeekendDate(moment());
  const nextWeek = moment().add(7, "d");

  const quickDatesList = [
    {
      name: "Tomorrow",
      icon: LightModeOutlinedIcon,
      description: tomorrow.format("ddd"),
      color: "warning",
    },
    {
      name: "Later this week",
      icon: EventOutlinedIcon,
      description: laterThisWeek.format("ddd"),
      color: "primary",
    },
    {
      name: "This weekend",
      icon: WeekendOutlinedIcon,
      description: thisWeekend.format("ddd"),
      color: "success",
    },
    {
      name: "Next week",
      icon: DateRangeOutlinedIcon,
      description: nextWeek.format("ddd D MMM"),
      color: "primary",
    },
    {
      name: "No date",
      icon: DoNotDisturbAltOutlinedIcon,
      description: "",
      color: "info",
    },
  ];

  return (
    // <FormControl size="small" fullWidth>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Menu
        open={open}
        anchorEl={anchorEl}
        // sx={{ ".MuiMenu-paper": { width: 250 } }}
      >
        {quickDatesList.map((date) => {
          const IconComponent = date.icon;
          return (
            <MenuItem key={date.name}>
              <ListItemIcon>
                <IconComponent fontSize="small" color={date.color} />
              </ListItemIcon>
              <ListItemText sx={{ ".MuiListItemText-root": { fontSize: 10 } }}>
                {date.name}
              </ListItemText>
              <Typography variant="caption" color="text.secondary">
                {date.description}
              </Typography>
            </MenuItem>
          );
        })}
        <Divider />

        <MenuItem
          sx={{
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
              cursor: "default",
            },
          }}
        >
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            label="Due Date"
            openTo="day"
            value={date}
            onChange={changeDate}
            inputFormat="YYYY-MM-DD"
            renderInput={(params) => <TextField {...params} size="small" />}
            disablePast
          />
        </MenuItem>
      </Menu>
    </LocalizationProvider>
    // </FormControl>
  );
};

export default SelectDateMenu;
