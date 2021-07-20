import React, { useEffect, useState } from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import RedoSharpIcon from "@material-ui/icons/RedoSharp";
import { MoreVert } from "@material-ui/icons";
import ChevronLeftSharpIcon from "@material-ui/icons/ChevronLeftSharp";
import ChevronRightSharpIcon from "@material-ui/icons/ChevronRightSharp";
import KeyboardSharpIcon from "@material-ui/icons/KeyboardSharp";
import SettingsApplicationsSharpIcon from "@material-ui/icons/SettingsApplicationsSharp";
import Section from "./Section";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferSharpIcon from "@material-ui/icons/LocalOfferSharp";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emaillist">
      <div className="emaillist_setting">
        <div className="emaillist_settingleft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoSharpIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emaillist_settingright">
          <IconButton>
            <ChevronLeftSharpIcon />
          </IconButton>
          <IconButton>
            <ChevronRightSharpIcon />
          </IconButton>
          <IconButton>
            <KeyboardSharpIcon />
          </IconButton>
          <IconButton>
            <SettingsApplicationsSharpIcon />
          </IconButton>
        </div>
      </div>
      <div className="emaillist_sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferSharpIcon} title="Promotion" color="green" />
      </div>

      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
