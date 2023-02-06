import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import {useTranslation} from "react-i18next";
import Translation from "../../../common/Translation";
import {makeStyles} from "@mui/styles";
import CustomIcon from "../../../shared-components/CustomIcon";
import Icons from "../../../common/Icons";
import CustomTooltip from "../../../shared-components/CustomTooltip";

const useStyles = makeStyles(() => ({
    aboutUsBox: {
        width: "90%",
        minHeight: 250,
        margin: "auto",
        display: "flex",
        alignItems: "center"
    },
    aboutUsTitleBox: {
        width: "100%",
        height: 50,
        display: "flex",
        alignItems: "center",
    },
    aboutUsTitleText: {
        fontSize: ""
    },
    aboutUsContentBox: {},
    coFounderTitleBox: {
        width: "90%",
        margin: "auto",
        display: "flex",
        alignItems: "center"
    },
    coFounderBox: {
        display: "flex",
        justifyContent: "space-around"
    },
    card: {
        margin: 50,
        borderRadius: 10,
        "& >img": {
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
        // height: "calc(100% - 200px)"
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
            <Box className={classes.aboutUsBox}>
                <Box className={classes.aboutUsTitleBox}>
                    <Typography gutterBottom variant="h5" component="span" className={classes.name}>
                        {t("aboutUsTitle")}
                    </Typography>
                </Box>
                <Box className={classes.aboutUsContentBox}>
                    <Typography variant="body2" color="text.secondary" className="text-justify">
                        {t("aboutUsContent")}
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.coFounderTitleBox}>
                <Typography gutterBottom variant="h5" component="span" className={classes.name}>
                    {t("coFounderTitle")}
                </Typography>
            </Box>
            <Box className={classes.coFounderBox}>
                <Card sx={{width: 400}} className={classes.card}>
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
                    <CardActions>
                        <CustomTooltip title={t("telegram")}>
                            <IconButton size="small">
                                <CustomIcon icon={Icons.Telegram} color="#29b6f6"/>
                            </IconButton>
                        </CustomTooltip>
                        <IconButton size="small">
                            <CustomIcon icon={Icons.Whatsapp} color="#40c351"/>
                        </IconButton>
                        <IconButton size="small">
                            <CustomIcon icon={Icons.Instagram} color="#f50057"/>
                        </IconButton>
                    </CardActions>
                </Card>

                <Card sx={{width: 400}} className={classes.card}>
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
                    <CardActions>
                        <CustomTooltip title={t("telegram")}>
                            <IconButton size="small">
                                <CustomIcon icon={Icons.Telegram} color="#29b6f6"/>
                            </IconButton>
                        </CustomTooltip>
                        <IconButton size="small">
                            <CustomIcon icon={Icons.Whatsapp} color="#40c351"/>
                        </IconButton>
                        <IconButton size="small">
                            <CustomIcon icon={Icons.Instagram} color="#f50057"/>
                        </IconButton>
                    </CardActions>
                </Card>

                <Card sx={{width: 400}} className={classes.card}>
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
                    <CardActions>
                        <CustomTooltip title={t("telegram")}>
                            <IconButton size="small">
                                <CustomIcon icon={Icons.Telegram} color="#29b6f6"/>
                            </IconButton>
                        </CustomTooltip>
                        <IconButton size="small">
                            <CustomIcon icon={Icons.Whatsapp} color="#40c351"/>
                        </IconButton>
                        <IconButton size="small">
                            <CustomIcon icon={Icons.Instagram} color="#f50057"/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default AboutUs;