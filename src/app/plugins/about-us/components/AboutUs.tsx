import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import Translation from "../../../common/Translation";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    bodyBox: {
        display: "flex",
        justifyContent: "space-around"
    },
    card: {
        margin: 50,
        borderRadius: 10,
        "& img": {
            height: 200
        }
    },
    cardActionArea: {
        height: "100%"
    },
    cardImage: {
        width: 180,
        height: "180px !important",
        margin: "auto"
    },
    cardContent: {
        height: "calc(100% - 200px)"
    },
    name: {
        fontSize: 24,
        fontWeight: "bold"
    },
}));

const AboutUs = () => {
    const {t} = useTranslation(Translation.AboutUs);
    const classes = useStyles();

    return (
        <>
            <Box className={classes.bodyBox}>
                <Card sx={{ width: 400 }} className={classes.card}>
                    <CardActionArea className={classes.cardActionArea}>
                        <CardMedia
                            component="img"
                            image="assets/images/avatars/habib.jpg"
                            alt="Habib Alizadeh"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="div" className={classes.name}>
                                {t("habibName")}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="text-justify">
                                {t("aboutHabib")}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ width: 400 }} className={classes.card}>
                    <CardActionArea className={classes.cardActionArea}>
                        <CardMedia
                            component="img"
                            image="assets/images/avatars/avatar.svg"
                            alt="Mostafa Nouri"
                            className={classes.cardImage}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="div" className={classes.name}>
                                {t("mostafaName")}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="text-justify">
                                {t("aboutMostafa")}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ width: 400 }} className={classes.card}>
                    <CardActionArea className={classes.cardActionArea}>
                        <CardMedia
                            component="img"
                            image="assets/images/avatars/avatar.svg"
                            alt="Filip Brocic"
                            className={classes.cardImage}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="div" className={classes.name}>
                                {t("filipName")}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="text-justify">
                                {t("aboutFilip")}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </>
    );
}

export default AboutUs;