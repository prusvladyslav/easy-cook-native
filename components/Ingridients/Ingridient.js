import { View, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper';
import 'react-native-get-random-values'
import { Swipeable } from 'react-native-gesture-handler'
import { renderRightActions } from '../common/renderRight'
const styles = StyleSheet.create({
    inputName: {
        flex: 3
    },
    inputQuantity: {
        flex: 1
    },
    inputsContainer: {
        flexDirection: 'row',
        marginVertical: 15,
    },
});
export const Ingridient = ({ setIngridients, id }) => {
    const onDelete = (setIngridients) => {
        setIngridients((prev) => prev.filter((item) => item.id !== id))
    }
    const onChange = (type,value) => {
        setIngridients((prev) => {
            return prev.map((item) => (item.id === id ? {...item, [type]: value} : item))
        })
    }
 
    return (
        <Swipeable renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, id, onDelete,setIngridients)}>
            <View style={styles.inputsContainer}>
                <TextInput
                    label={'Name'}  
                    style={styles.inputName}
                    onChangeText={(value) => onChange('name',value)}
                    autoComplete='none'
                    autoCapitalize='none'
                    activeUnderlineColor='black'
                />
                <TextInput
                    label={'Quantity'}
                    style={styles.inputQuantity}
                    onChangeText={(value) => onChange('quantity',value)}
                    autoComplete='none'
                    autoCapitalize='none'
                    activeUnderlineColor='black'
                />
            </View>
        </Swipeable>
    )
}