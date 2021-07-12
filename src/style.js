import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( (theme) =>({
toolbar:{
    flexGrow: 1,
    flexWrap: 'wrap',
},
root:{
    flexGrow: 1,
    left: 0,
},
}));

export default useStyles;