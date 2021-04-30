import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import MainContext from "../contexts/MainContext";
import DisplayArrayFeatures from "./DisplayArrayFeatures";
import { RemoveButton, AddButton } from "../styles/buttons";
import { Title } from "../styles/title";
import { DivWithLeftBorder } from "../styles/borders";

const DisplayPeopleFeatures = () => {
  const value = useContext(MainContext);
  const {
    peopleFeaturesList,
    removeFeature,
    handleFeatureModalOpen,
    selectFeatureType,
  } = value;
  return (
    <div>
      <div>
        <Title>
          <h1>People</h1>
        </Title>

        {peopleFeaturesList.map((feature) => {
          const { featureName, featureValue } = feature;
          return (
            <div>
              {featureName !== "Ethnicity" ? (
                <DivWithLeftBorder>
                  <p>{`${featureName} ${featureValue}`}</p>
                  <Tooltip title="Delete">
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeFeature(featureName)}
                    >
                      <RemoveButton />
                    </IconButton>
                  </Tooltip>
                </DivWithLeftBorder>
              ) : (
                <DisplayArrayFeatures
                  featureName={featureName}
                  featureValue={featureValue}
                />
              )}
              <p>And</p>
            </div>
          );
        })}

        <Tooltip title="Add">
          <IconButton
            aria-label="add"
            onClick={() => {
              selectFeatureType();
              handleFeatureModalOpen();
            }}
          >
            <AddButton size={50} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default DisplayPeopleFeatures;
