import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"

export default createMuiTheme(
    {
        palette: {
            common: {
                blue: `${arcBlue}`,
                orange: `${arcOrange}`
            },
            primary: {
                main: `${arcBlue}`
            },
            secondary: {
                main: `${arcOrange}`
            }
        }
        ,
        typography: {
            tab: {
                fontFamily: "Raleway",
                textTransform: "none",
                fontWeight: 450,
                fontSize: "1em",
            },
            logout: {
                borderBottomRightRadius: "20px",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                height: 30,
                fontSize: "1rem",
                fontFamily: "Padifico",
                textTransform: "none",
                color: "white"
            }

        }
    }
)