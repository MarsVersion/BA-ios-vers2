import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'transparent',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: "'transparent'",
    borderRadius: 30,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 50,
  },
 resultScrollView: {
  flexGrow: 1,
  paddingHorizontal: 10,
  paddingVertical: 10,  // Combine padding from the second instance
},

  header: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
    marginBottom: 35,
    color: "white",
    textAlign: "center",
  },
  form: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    color: "white",
  paddingVertical: 15, // Increase vertical padding to enlarge touchable area
    paddingHorizontal: 20, // Add horizontal padding for better space
    marginBottom: 30,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 18,
    backgroundColor: 'transparent',
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 2,
    paddingLeft: 30,
    backgroundColor: 'transparent',
  },
  checkboxLabel: {
    fontSize: 18,
    color: "white",
    marginLeft: 15,
    marginBottom: 3,
  },
  legend: {
    fontSize: 19,
    color: "white",
    fontWeight: "500",
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  result: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 4,
    maxWidth: "100%",
    alignItems: "flex-start",
    flexShrink: 1,     // Ensures the content shrinks when necessary
    flexGrow: 1,       // Allows growing with the content
    flexWrap: 'wrap',  // Forces wrapping of text
    overflow: 'hidden' // Prevents overflow
},

resultContainer: {
  width: '100%',
  maxWidth: 800,        // Maximum width for larger screens
  maxHeight: 400,       // Increase this height if needed, to allow more content to be visible
  backgroundColor: 'white',
  borderRadius: 4,
  overflow: 'hidden',   // Ensure content doesn't overflow the container
  marginBottom: 20,
  padding: 10,          // Add padding to avoid text touching the edges
  flexGrow: 1,          // Allow it to grow with the content
},



  additionalInfo: {
    marginTop: 5,
    padding: 30,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "rgb(175, 4, 4)",
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
  },
customButton: {
    borderWidth: 1,
    borderColor: "rgb(175, 4, 4)",
    borderRadius: 5,
    paddingVertical: 12,  // Adjust this value for consistent height
    paddingHorizontal: 20, // Adjust this value for consistent width
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    width: '100%',  // Set a fixed width or adjust according to the container's width
    maxWidth: 350,  // Ensure both buttons have the same max width
    height: 50,     // Ensure both buttons have the same height
  },
  customButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgb(175, 4, 4)',
  },
  strong: {
    fontWeight: 'bold',
  },
  listContainer: {
    paddingLeft: 0,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 'wrap',
  },
listItemNumber: {
  width: 30,  // A fixed width to align numbers
},
listItem: {
  flex: 1,   // Allows the text to wrap around and not push the number down
},
  clearButton: {
    display: 'flex',
    width: '100%',
    maxWidth: 350,
    height: 50,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 18,
    color: 'black',
  },

  phoneText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: 'white',
    textDecorationLine: 'underline',
    textAlign: 'left',
    marginTop: 10,
  }
  
  
});


export default styles;
