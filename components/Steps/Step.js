import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-paper';
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        minHeight: 300,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingLeft: 5,
        backgroundColor: '#efefef',
        margin: 20,
        minHeight: 50,
    },
    swipedRow: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingLeft: 5,
        backgroundColor: '#818181',
        margin: 20,
        minHeight: 50,
    },
    swipedConfirmationContainer: {
        flex: 1,
    },
    deleteConfirmationText: {
        color: '#fcfcfc',
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: '#b60000',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
    },
    deleteButtonText: {
        color: '#fcfcfc',
        fontWeight: 'bold',
        padding: 3,
    },
});




export const Step = ({ steps, setSteps, id }) => {
    const onDelete = (setSteps) => {
        setSteps((prev) => prev.filter((item) => item.id !== id))
    }
 
    const onChange = (type,value) => {
        setSteps((prev) => {
            return prev.map((item) => (item.id === id ? {...item, [type]: value} : item))
        })
    }
 
    return (
        <Swipeable renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, id, onDelete,setSteps)}>
            <View style={styles.inputsContainer}>
                <Text>{steps.findIndex((item) => item.id === id) + 1}.</Text>
                <TextInput
                    label={'Step'}  
                    style={styles.inputName}
                    onChangeText={(value) => onChange('name',value)}
                    autoComplete='none'
                    autoCapitalize='none'
                    activeUnderlineColor='black'
                />
            </View>
        </Swipeable>
    )
}