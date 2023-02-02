import Inbox from "@mui/icons-material/Inbox";
import Today from "@mui/icons-material/Today";
import Upcoming from "@mui/icons-material/CalendarMonth";
import Filter from "@mui/icons-material/Tune";

export const mainProjectFilters = [
  { title: "Today", icon: <Today color="success" /> },
  { title: "Upcoming", icon: <Upcoming color="primary" /> },
  { title: "Inbox", icon: <Inbox color="secondary" /> },
  { title: "Filters & Labels", icon: <Filter color="warning" /> },
];
