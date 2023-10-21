import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Header/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Nome do usuário" />
        
        <Balance/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
