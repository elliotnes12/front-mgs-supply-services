import { StyleSheet } from 'react-native';
import { Color } from '../../../../utils/constantsStyle';

export const styles = StyleSheet.create({

  gradient: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    width: 140
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 4,
    borderRadius: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 110,
    marginRight: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8
  },
  tabButtonActive: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 110,
    marginRight: 10,
    backgroundColor: 'transparent',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  tabLabel: {
    fontSize: 16,
  },
  contentContainer: {
    marginTop: 10,
    flex: 1,
  },


});
