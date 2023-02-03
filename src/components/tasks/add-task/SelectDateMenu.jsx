import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { format } from "date-fns";
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
import { quickDatesArr } from "../../../utils/dateTimeUtil";

const SelectDateMenu = ({
  open,
  anchorEl,
  selectDate,
  closeSelectDateMenu,
}) => {
  const [date, setDate] = useState(format(new Date(), "yyyy/MM/dd"));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Menu open={open} anchorEl={anchorEl} onClose={closeSelectDateMenu}>
        <MenuItem
          onClick={() => {
            selectDate(new Date());
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
            selectDate(new Date(e));
          }}
          inputFormat="yyyy/MM/dd"
          renderInput={(params) => <TextField {...params} size="small" />}
          disablePast
        />
      </Menu>
    </LocalizationProvider>
  );
};

export default SelectDateMenu;
