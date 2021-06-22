import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    borderColor: 'lightgrey',
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#8d8d8d',
  },
  numberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'lightgrey',
  },
  count: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  sign: {
    fontSize: 15,
    color: '#474747',
  },
});

export default styles;
