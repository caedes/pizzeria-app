import { arrayOf, node, bool, func, string, shape } from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import React from "react";

export default function Popin({ open, title, children, actions }) {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions.map(({ label, onClick, primary }) => (
          <Button
            key={label}
            color={primary ? "primary" : "secondary"}
            onClick={onClick}
          >
            {label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}

Popin.propTypes = {
  open: bool,
  title: string,
  children: node.isRequired,
  actions: arrayOf(
    shape({
      label: string,
      onClick: func,
      primary: bool,
    })
  ),
};

Popin.defaultProps = {
  open: false,
  title: null,
  actions: [],
};
