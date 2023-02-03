import { Button } from "@mui/material";

const AddTaskButton = ({ title, openMenuFn, Icon }) => {
  return (
    <Button
      variant="outlined"
      color="info"
      onClick={openMenuFn}
      sx={{
        textTransform: "capitalize",
        fontSize: "0.8rem",
        p: "2px 10px",
        borderRadius: "5px",
        ml: "3px",
        mr: "3px",
        borderColor: "#949494",
        color: "#949494",
        ":hover": { backgroundColor: "#fafafa", color: "rgba(0, 0, 0, 0.87)" },
        flexBasis: "0",
        flexGrow: "1",
      }}
    >
      <Icon
        sx={{
          height: "0.8em",
          width: "0.8em",
          fill: "949494",
          ":hover": "rgba(0, 0, 0, 0.87)",
        }}
      />
      {title}
    </Button>
  );
};

export default AddTaskButton;
