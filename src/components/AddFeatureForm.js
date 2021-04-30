import React, { useContext } from "react";
import MainContext from "../contexts/MainContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddFeatureForm = () => {
  const value = useContext(MainContext);
  const { addNewFeature, handleFeatureModalClose } = value;
  return (
    <form onSubmit={addNewFeature}>
      <TextField
        name="featureName"
        id="standard-basic"
        label="type cell name like country, language etc."
        variant="outlined"
      />
      <TextField
        name="featureValue"
        id="standard-basic"
        label="type cell value like Poland, English etc."
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

export default AddFeatureForm;
