import { StyleSheet, Text, View, Button, Input, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react'
import { recipes } from '../../stores'
import { observer } from 'mobx-react-lite'
import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { YourRecipesListItem } from '../../components';
export const YourRecipes = observer(({ navigation }) => {
    const sortedRecipes = recipes.getAllRecipesSorted()
    const hasRecipe = recipes.hasRecipe()
    return (
        <View style={!hasRecipe && styles.container}>
            {hasRecipe ?
               sortedRecipes.map(item => {
                return (
                    <YourRecipesListItem item={item} key={item.id}/>
                )
               })
                : <Text style={[styles.noRecipe]}>You have no recipes</Text>}
        </View>
    )
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noRecipe: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
