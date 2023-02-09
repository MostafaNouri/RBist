import {Box} from "@mui/system";
import {Button, Link, TextField, Theme, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Trans, useTranslation} from "react-i18next";
import Translation from "../../../common/Translation";
import {useNavigate} from "react-router-dom";
import history from "@history";

const useStyles = makeStyles((theme: Theme) => ({
    body: {
        width: "35%",
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
    },
    redirectLink: {
        fontSize: 14,
        fontWeight: theme.typography.fontWeightBold,
        textDecoration: "none !important",
        color: theme.palette.text.secondary,
        cursor: "pointer"
    }
}));

const Register = () => {
    const {t} = useTranslation(Translation.Register);
    const classes = useStyles();

    const handleTextFieldChange = (event) => {
        // setModel({...model, [event.target.name]: event.target.value});
    }

    const redirectToRegisterPage = (url) => {
        history.push(url);
    }

    return (
        <>
            <Box className={classes.body}>
                <Box className={classes.root}>
                    <Box className={classes.titleBox}>
                        <TextField
                            required
                            id="login-email"
                            label={t("email")}
                            onChange={handleTextFieldChange}
                            name="email"
                            size="small"
                            className="w-full mb-16"
                        />
                    </Box>
                    <Box className={classes.titleBox}>
                        <TextField
                            required
                            id="login-password"
                            label={t("password")}
                            onChange={handleTextFieldChange}
                            name="password"
                            size="small"
                            className="w-full mb-16"
                        />
                    </Box>
                    <Box className={classes.titleBox}>
                        <TextField
                            required
                            id="login-repeat-password"
                            label={t("repeatPassword")}
                            onChange={handleTextFieldChange}
                            name="password"
                            size="small"
                            className="w-full mb-16"
                        />
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary" className="w-full">{t("register")}</Button>
                    </Box>
                    <Box className="w-full flex items-center justify-center h-40">
                        <span>
                            <Trans t={t}
                                   i18nKey="loginDirectMessage"
                                   components={{Link: <Link className={classes.redirectLink} onClick={() => redirectToRegisterPage("/login")}/>}}
                            />
                        </span>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Register;