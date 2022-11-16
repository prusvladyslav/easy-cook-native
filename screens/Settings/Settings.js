import { Text, View, StyleSheet,Pressable,Button } from 'react-native'
import { CheckBox, Icon } from '@rneui/themed';
import { recipes } from '../../stores';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
export const Settings = observer(({ }) => {
    const navigation = useNavigation()
    const currentSortBy = recipes.sortBy
    const hasRecipe = recipes.hasRecipe()
    const [confirmDelete,setConfirmDelete] = useState(false)
    const onDeleteAll = () => {
          navigation.goBack()
        recipes.deleteAllRecipes()}
    return (
        <View style={[styles.container]}>
            <View style={[styles.sortContainer]}>
            <Text>
                Sort recipes by:
            </Text>
                <CheckBox
                    center
                    containerStyle={{ backgroundColor: 'none', margin: 0, padding: 0 }}
                    checked={currentSortBy === 'newest'}
                    title='newest'
                    onPress={() => recipes.changeSort('newest')}
                />
                <CheckBox
                    center
                    containerStyle={{ backgroundColor: 'none', margin: 0, padding: 0 }}
                    checked={currentSortBy === 'oldest'}
                    title='oldest'
                    onPress={() => recipes.changeSort('oldest')}
                />
                <CheckBox
                    center
                    containerStyle={{ backgroundColor: 'none', margin: 0, padding: 0 }}
                    checked={currentSortBy === 'rating'}
                    title='rating'
                    onPress={() => recipes.changeSort('rating')}
                />
            </View>
            {hasRecipe && <View style={[styles.deleteContainer]}>
            {!confirmDelete ? <Pressable onPress={() => setConfirmDelete(true)}>
                <Text style={styles.deleteIt}>Delete all recipes?</Text>
            </Pressable> : (
                <View>
                    <Text style={{fontSize: 20,fontWeight: 'bold'}}>Are you sure?</Text>
                    <View style={[styles.confirmDeleteContainer]}>
                    <Button title='Yes' onPress={() => onDeleteAll()}/>
                    <Button onPress={() => setConfirmDelete(false)} title='No'/>
                    </View>
                </View>
            )}
            </View>}
        </View>
    )
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    sortContainer: {
        // marginVertical: 10,
        flexDirection: 'row',
        paddingLeft: 10,
    },
    deleteIt: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 20,
    },
    deleteContainer: {
        marginBottom: 30,
    },
    confirmDeleteContainer: {
      flexDirection: 'row',
      justifyContent: 'center'
    }
})
