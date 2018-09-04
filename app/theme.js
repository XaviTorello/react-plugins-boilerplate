/**
 *
 * Theme
 *
 * It isolates all material-ui theme related configuration returning
 * a theme with the default values
 */

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// The colors
import { orange, red } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: orange,
    secondary: red,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
