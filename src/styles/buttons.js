import { makeStyles } from "@material-ui/core/styles";
import RemoveCircleIcon from "@material-ui/icons/Remove";
import AddCircleIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  removeCircle: {
    color: "#fff",
    background: "linear-gradient(#F76C91, #F34F6B)",
    borderRadius: "50%",
  },
  addCircle: ({ size }) => ({
    color: "#fff",
    background: "linear-gradient(#80F1A6, #31E8E0)",
    borderRadius: "50%",
    width: `${size}px`,
    height: `${size}px`,
  }),
}));

export const RemoveButton = () => {
  const classes = useStyles();
  return <RemoveCircleIcon className={classes.removeCircle} />;
};

export const AddButton = ({ size }) => {
  const classes = useStyles({
    size,
  });
  return <AddCircleIcon className={classes.addCircle} />;
};

AddButton.defaultProps = {
  size: 10,
};
