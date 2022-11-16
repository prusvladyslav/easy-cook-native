import { View, Text, StyleSheet, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid';
import { Ingridient} from './Ingridient'
const styles = StyleSheet.create({
    container: {
        // flex: 10, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 20,
    },
    input: {
        width: '50%',
    },
    inputsContainer: {
        flexDirection: 'row',
    }
});
export const AddIngridient = ({ ingridients, setIngridients }) => {
    const addNew = () => {
        setIngridients((prev) => [...prev, { id: nanoid() }])
    }
  
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Ingridients:</Text>
                <MaterialCommunityIcons onPress={() => addNew()} name="plus-box" color={'black'} size={30} />
            </View>
            {ingridients.map((ingridient) => {
                return (
                    <Ingridient id={ingridient.id} ingridients={ingridients} setIngridients={setIngridients} key={ingridient.id} />
                )
            })}
        </View>
    )
}