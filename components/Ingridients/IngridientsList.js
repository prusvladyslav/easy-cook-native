import { Text, View, StyleSheet } from 'react-native'
import { IngridientListItem } from './IngridientListItem'
export const IngridientsList = ({ ingridients,recipeId }) => {
    const hasIngridients = ingridients.length > 0 && ingridients[0].name
    return (
        <View >
            {hasIngridients && <Text style={styles.item}>Ingridients: </Text>}
            <View style={styles.container}>
            {hasIngridients && ingridients.map(item => {
                return (
                <IngridientListItem id={item.id} key={item.id} recipeId={recipeId}/>
                )
            })}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // marginVertical: 20,
        // marginTop: 0,
        // flex: 1,
        // backgroundColor: 'blue',
        // justifyContent: 'center',
    },
    item: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
})