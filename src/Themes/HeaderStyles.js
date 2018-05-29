import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const HeaderStyles = {
  screen: {
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerTitle: {
      fontSize: 35,
      fontWeight: 'bold',
      color: 'white',
    },
    headerSubtitle: {
      paddingHorizontal: 20,
      color: 'white',
    }
  },
}

export default HeaderStyles
