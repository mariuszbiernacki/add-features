import React, { useContext } from "react";
import MainContext from "../contexts/MainContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddArrayFeatureForm = () => {
  const value = useContext(MainContext);
  const { addNewEthnicity, handleFeatureModalClose } = value;
  return (
    <form onSubmit={addNewEthnicity}>
      {" "}
      <TextField
        name="featureValue"
        id="standard-basic"
        label="type value"
        variant="outlined"
      />
      <Button
        type="submit"
        onClick={handleFeatureModalClose}
        color="primary"
        autoFocus
        variant="contained"
      >
        Add
      </Button>
    </form>
  );
};

export default AddArrayFeatureForm;
