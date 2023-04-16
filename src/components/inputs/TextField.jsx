import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";

const TextFields = (id, label, type) => {
    const classes = useStyles();
    return (
        <TextField
            className={classes.field}
            id={id}
            label={label}
            type={type}
        />
    );
};

const useStyles = makeStyles({
        field: {
            backgroundColor: "pink",
        },
    });

export default TextFields;
