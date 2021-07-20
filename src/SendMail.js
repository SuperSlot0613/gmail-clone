import React from "react";
import "./SendMail.css";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CloseSendMessage, OpenSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(CloseSendMessage())
  };
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseSharpIcon
          className="sendMail_close"
          onClick={() => dispatch(CloseSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          autoComplete="off"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail_error">To is required</p>}
        <input
          placeholder="Subject"
          type="text"
          autoComplete="off"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">subject is required</p>
        )}
        <input
          placeholder="Message..."
          className="sendMail_message"
          type="text"
          autoComplete="off"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">Message is required</p>
        )}
        <div className="sendMail_option">
          <Button
            className="sendMail_button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
