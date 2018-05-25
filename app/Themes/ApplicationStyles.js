import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background,
      paddingHorizontal : 10,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: '#FFE5E5',
      flex: 1,
      opacity: 0.90,
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.background
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.smallMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: '#236EFF',
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    dataSquare: {
      backgroundColor: 'white',
      opacity: 0.80,
      height: 400,
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      padding: 10,
    },
    dataTitle: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
    centered: {
      alignItems: 'center'
    },
    titleCart: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    info : {
      fontSize: 16,
    },
  },
}

export default ApplicationStyles
