import React, {Fragment} from "react";
// STYLES //
import "./PostList.css";
// COMPONENTS //
import PostItem from "./PostingItem";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {Typography} from "@material-ui/core";

const PostList = ({postings}) => {

  const postingsLength = postings.length;
  const numPages = Math.ceil(postingsLength / 50);

  const [activeStep, setActiveStep] = React.useState(0);

  const postingsOnPage = postings.slice((activeStep * 50), (activeStep * 50) + 50);
  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const renderPostings = () => {
    return postingsOnPage.map((posting, i) => {
      return <PostItem key={`id-${i}-${posting.id}`} posting={posting}/>;
    })
  }

  const renderStepper = () => {
    return (
      <Fragment>
        Page {activeStep + 1} of {numPages}
        <MobileStepper
          variant="progress"
          className={"posting-list__stepper"}
          steps={numPages}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === numPages - 1}>
              Next
              {<KeyboardArrowRight/>}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {<KeyboardArrowLeft/>}
              Back
            </Button>
          }
        />
      </Fragment>
    );
  }

  return (
    <div className={"posting-list"}>
      {postings.length === 0 &&<Typography variant={"h6"}>No Postings Found.</Typography> }
      {postings.length > 0 && <Typography variant={"h6"}>Found {postingsLength} Postings.</Typography>}
      {postings.length > 0 && renderPostings()}
      {postings.length > 0 && renderStepper()}
    </div>
  );
};

export default PostList;
