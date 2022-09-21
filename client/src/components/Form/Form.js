import React from "react";

import useStyles from './styles';
const Form = () => {
    const classes = useStyles();
    return (
        <h1 className={classes.form}>FORM</h1>
    );
}

export default Form;