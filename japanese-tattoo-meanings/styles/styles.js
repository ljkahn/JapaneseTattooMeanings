import { StyleSheet } from 'react-native';

export const colors = {
  background: '#F5EFE0',
  text: '#000000',
  accent: '#D4A373',
  button: '#FFFFFF',
  buttonText: '#000000',
  header: '#4A4A4A',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  text: {
    color: colors.text,
    fontFamily: 'PlayfairDisplay-Regular',
  },
  header: {
    backgroundColor: colors.header,
    padding: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.buttonText,
    fontFamily: 'PlayfairDisplay-Regular',
  },
  button: {
    backgroundColor: colors.accent,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 18,
    fontFamily: 'PlayfairDisplay-Regular',
  },
  categoryButton: {
    backgroundColor: colors.accent,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  categoryButtonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PlayfairDisplay-Regular',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
    marginVertical: 10,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'PlayfairDisplay-Regular',
  },
});
