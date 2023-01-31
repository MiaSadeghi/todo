import { useState } from "react";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { StaticDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {
  TextField,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { Today as TodayIcon } from "@mui/icons-material";
import {
  quickDatesArr,
  dates,
  isSameYear,
  isLessThanAWeekAway,
} from "../../../utils/dateTimeUtil";

const SelectDateMenu = ({
  open,
  anchorEl,
  selectDate,
  closeSelectDateMenu,
}) => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  // const changeDate = (e) => {
  //   setDate(e.format("YYYY-MM-DD"));
  // };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={closeSelectDateMenu}

        // sx={{ ".MuiMenu-paper": { width: 250 } }}
      >
        <MenuItem
          onClick={() => {
            selectDate(moment());
          }}
        >
          <ListItemIcon>
            <TodayIcon fontSize="small" color="success" />
          </ListItemIcon>
          <ListItemText sx={{ ".MuiListItemText-root": { fontSize: 10 } }}>
            Today
          </ListItemText>
        </MenuItem>
        <Divider />

        {quickDatesArr.map((date) => {
          const IconComponent = date.icon;
          return (
            <MenuItem
              key={date.name}
              onClick={() => {
                selectDate(date.date);
              }}
            >
              <ListItemIcon>
                <IconComponent fontSize="small" color={date.color} />
              </ListItemIcon>
              <ListItemText sx={{ ".MuiListItemText-root": { fontSize: 10 } }}>
                {date.name}
              </ListItemText>
              <Typography variant="caption" color="text.secondary">
                {date.label}
              </Typography>
            </MenuItem>
          );
        })}
        <Divider />

        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          label="Due Date"
          openTo="day"
          value={date}
          onChange={(e) => {
            selectDate(moment(e));
            console.log(moment(e));
          }}
          inputFormat="YYYY-MM-DD"
          renderInput={(params) => <TextField {...params} size="small" />}
          disablePast
        />
      </Menu>
    </LocalizationProvider>
  );
};

export default SelectDateMenu;
