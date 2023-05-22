import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} confirmHandler={props.confirmHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.confirmHandler}>Ok</Button>
    </footer>
  </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop confirmHandler={props.confirmHandler}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} confirmHandler={props.confirmHandler}/>, document.getElementById('overlay-root'))}
    </>
  );
};

export default ErrorModal;
