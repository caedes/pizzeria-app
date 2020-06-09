import { arrayOf, node, bool, func, string, shape } from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import React from "react";

export default function Popin({ open, title, children, actions, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
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
  onClose: func,
};

Popin.defaultProps = {
  open: false,
  title: null,
  actions: [],
  onClose: Function.prototype,
};
