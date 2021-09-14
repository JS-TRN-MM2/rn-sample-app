import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#364A59',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 40,

    height: '100%',
    width: '100%',
  },
  greeting: {
    marginTop: 100,
    color: '#FFF',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#0078CE',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: '50%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0066DD',
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.5,
    shadowOffset: { height: 2, width: 0 },
  },
  buttontext: {
    color: '#FFF',
  },
  img: { height: 150, width: 150 },
  listRow: {
    flexDirection: 'row',
    paddingLeft: 50,

        marginTop: 20,
  },
  listBullet: {
    color: '#FFF',
    fontSize: 18,
  },
  listItem: {
    flex: 1,
    paddingLeft: 5,
    color: '#FFF',
    fontSize: 18,
  },
});

export default styles;
