import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue="#0B72B9"
const arcOrange="#E4F226"

export default createMuiTheme(
    {
      pallate : {
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
        typography : {
            tab : {
                fontFamily: "Raleway",
                textTransform: "none",
                fontWeight: 450,
                fontSize : "1em",
            }
            
        }
    }
)