import { IconButton } from "@material-ui/core";
import {
  ExitToApp,
  LabelImportant,
  MoveToInbox,
  UnfoldMore,
} from "@material-ui/icons";
import ErrorSharpIcon from "@material-ui/icons/ErrorSharp";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import WatchLaterSharpIcon from "@material-ui/icons/WatchLaterSharp";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import PrintSharpIcon from "@material-ui/icons/PrintSharp";
import React from "react";
import "./Mail.css";
import { useHistory } from "react-router-dom";
import { selectOpenMail } from "./features/mailSlice";
import { useSelector } from "react-redux";

function Mail() {
  const history = useHistory();
  const selectedMail=useSelector(selectOpenMail)

  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIosSharpIcon />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <ErrorSharpIcon />
          </IconButton>
          <IconButton>
            <DeleteSharpIcon />
          </IconButton>
          <IconButton>
            <EmailSharpIcon />
          </IconButton>
          <IconButton>
            <WatchLaterSharpIcon />
          </IconButton>
        </div>
        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <PrintSharpIcon />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className="mail_important" />
          <p>{selectedMail?.title}</p>
          <p className="mail_time">{selectedMail?.time}</p>
        </div>
        <div className="mail_message">
            <p>{selectedMail?.description}</p> 
        </div>
      </div>
    </div>
  );
}

export default Mail;
