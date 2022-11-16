import { observer } from 'mobx-react-lite'
import {View,Text,Pressable,StyleSheet,SafeAreaView} from 'react-native'
import { recipes } from '../../stores'
export const CreateMore = observer(({setIsCreated,navigation}) => {
    const lastRecipe = recipes.getLastRecipe()
    const lastRecipeName = lastRecipe?.values?.name
    const lastRecipeId = lastRecipe?.id
    return (
        <View style={styles.container}>
            <Text style={styles.lastItem}><Text style={styles.lastItemTitle}>{lastRecipeName}</Text> has been added to your recipe book</Text>
            <Pressable onPress={() => setIsCreated(false)}>
                <Text style={styles.addMore}>Add more</Text>
            </Pressable>
            <Pressable onPress={() =>  navigation.navigate('My Recipe',{id: lastRecipeId,name: lastRecipeName})}>
                <Text style={styles.addMore}>View</Text>
            </Pressable>
         </View>
    )
})
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    lastItem: {
        marginVertical: 10,
    },
    lastItemTitle: {
        fontWeight: 'bold',
    },
    addMore: {
        color: 'blue',
marginTop: 10,
        fontSize: 20,
    }
})