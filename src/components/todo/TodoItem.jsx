import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTodo, openUpdateModel, toggleComplete } from "./todoSlice";

const TodoItem = ({ todo, number }) => {
  const { id, text, isCompleted, createdAt } = todo;
  const dispatch = useDispatch();

  return (
    <ListItem
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        gap: 2,
        boxShadow: 2,
        mb: 2,
        borderRadius: 2,
        bgcolor: isCompleted ? "success.main" : "white",
        color: isCompleted ? "white" : "inherit",
      }}
    >
      <ListItemButton
        onClick={() => dispatch(toggleComplete(id))}
        sx={{
          width: "100%",
          borderRadius: 2,
          "&:hover": {
            bgcolor: isCompleted ? "success.main" : "",
          },
        }}
      >
        <ListItemIcon>
          <Typography
            sx={{
              width: "30px",
              height: "30px",
              background: "#e5e5e5",
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              color: "text.primary",
              fontWeight: "700",
            }}
            variant="body2"
            component="span"
          >
            {number}
          </Typography>
        </ListItemIcon>
        <ListItemText
          primary={text}
          secondary={createdAt.toDate().toLocaleString()}
        />
      </ListItemButton>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignSelf="center"
        gap={2}
        sx={{ width: { xs: "100%", sm: "auto" } }}
      >
        <Button
          onClick={() => dispatch(openUpdateModel(id))}
          variant="contained"
          color="primary"
        >
          Edit
        </Button>
        <Button
          onClick={() => dispatch(deleteTodo(id))}
          variant="contained"
          color="error"
        >
          Remove
        </Button>
      </Stack>
    </ListItem>
  );
};

// const TodoItem = ({ todo, number }) => {
//   const { id, text, isCompleted, createdAt } = todo;
//   const dispatch = useDispatch();

//   return (
//     <ListItem sx={{ border: "1px solid red" }}>
//       <Grid container justifyContent="space-between" alignItems="center">
//         <Grid item>
//           <Box component="span">{number}</Box>
//           <Box>
//             <Typography variant="body1">{text}</Typography>
//             <Typography variant="body2">
//               {createdAt.toDate().toLocaleString()}
//             </Typography>
//           </Box>
//         </Grid>

//         <Grid item spacing={2}>
//           <Button variant="contained">Edit</Button>
//           <Button variant="contained" color="error">
//             Remove
//           </Button>
//         </Grid>
//       </Grid>
//     </ListItem>
//   );
// };

export default TodoItem;
