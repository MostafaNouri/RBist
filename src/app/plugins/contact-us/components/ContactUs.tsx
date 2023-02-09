import {Box} from "@mui/system";
import {makeStyles} from "@mui/styles";
import {useTranslation} from "react-i18next";
import Translation from "../../../common/Translation";
import {Button, TextField, Theme} from "@mui/material";
import {useState} from "react";

const useStyles = makeStyles((theme: Theme) => ({
    body: {
        width: "45%",
        margin: "50px auto",
    },
    root: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(5),
        borderRadius: theme.spacing(1),
        boxShadow: theme.shadows[1]
    },
    titleBox: {
        display: "flex",
        alignItems: "center"
    }
}));

interface IContactUs {
    title: string,
    description: string
}

const ContactUs = () => {
    const {t} = useTranslation(Translation.ContactUs);
    const classes = useStyles();
    const [model, setModel] = useState<IContactUs>({
        title: '',
        description: ''
    });

    const handleTextFieldChange = (event) => {
        setModel({...model, [event.target.name]: event.target.value});
    }

    return (
        <>
            <Box className={classes.body}>
                <Box className={classes.root}>
                    <Box className={classes.titleBox}>
                        <TextField
                            required
                            id="contact-us-title"
                            label={t("title")}
                            onChange={handleTextFieldChange}
                            name="title"
                            size="small"
                            className="w-full mb-16"
                        />
                    </Box>
                    <Box className={classes.titleBox}>
                        <TextField
                            required
                            id="contact-us-description"
                            label={t("description")}
                            multiline
                            rows={4}
                            maxRows={8}
                            onChange={handleTextFieldChange}
                            name="description"
                            size="small"
                            className="w-full mb-16"
                        />
                    </Box>
                    <Box>
                        <Button className="w-full" variant="contained" color="primary">{t("send")}</Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default ContactUs;