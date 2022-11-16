import { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { recipes } from '../../stores'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IngridientsList, StepsList } from '../../components';
import { observer } from 'mobx-react-lite';
import { Modal, Portal, Button, Provider } from 'react-native-paper';

export const MyRecipe = observer(({ navigation, route: { params: { id } } }) => {
    const thisRecipe = recipes.getRecipeById(id)
    const isRecipeComplete = recipes.isRecipeComplete(id)
    useEffect(() => {
        if (isRecipeComplete) {
            navigation.navigate('RecipeComplete',{id: id,name: thisRecipe.values.name})
        }
    },[isRecipeComplete])
    return (
        <SafeAreaView style={styles.container}>
            <IngridientsList ingridients={thisRecipe.ingridients} recipeId={id} />
            <StepsList steps={thisRecipe.steps} recipeId={id} />
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="delete"
                    onPress={() => {
                        recipes.deleteRecipe(id)
                        navigation.goBack()
                    }
                    }
                    color={'black'} size={'50'} />
            </View>
        </SafeAreaView>
    )
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
    }
})