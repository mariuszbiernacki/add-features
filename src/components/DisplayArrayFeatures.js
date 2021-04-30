import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import MainContext from "../contexts/MainContext";
import { RemoveButton, AddButton } from "../styles/buttons";

const DisplayArrayFeatures = ({ featureName, featureValue }) => {
  const value = useContext(MainContext);
  const {
    removeFeature,
    removeEthnicity,
    handleFeatureModalOpen,
    selectFeatureType,
  } = value;
  return (
    <div>
      <div>
        <p>{featureName}</p>
        <Tooltip title="Delete">
          <IconButton
            aria-label="delete"
            onClick={() => removeFeature(featureName)}
          >
            <RemoveButton />
          </IconButton>
        </Tooltip>
      </div>
      <ul>
        {featureValue.map((feature) => {
          return (
            <li>
              <p>{feature}</p>
              <Tooltip title="Delete">
                <IconButton
                  aria-label="delete"
                  onClick={() => removeEthnicity(feature)}
                >
                  <RemoveButton />
                </IconButton>
              </Tooltip>
              <p>Or</p>
            </li>
          );
        })}
      </ul>
      <Tooltip title="Add">
        <IconButton
          aria-label="add"
          onClick={() => {
            selectFeatureType("Ethnicity");
            handleFeatureModalOpen();
          }}
        >
          <AddButton size={30} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default DisplayArrayFeatures;
