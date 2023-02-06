import {withStyles} from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';

const CustomTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        boxShadow: theme.shadows[1],
        fontSize: 12,
        padding: 10,
        zIndex: 15000
    },
    arrow: {
        color: theme.palette.secondary.main,
    },
}))((props: any) => <Tooltip placement="top" {...props} arrow children={props.children}/>);

export default CustomTooltip;