import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react'
import { recipes } from '../../stores'
import { observer } from 'mobx-react-lite'
import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export const YourRecipesListItem = observer(({ item }) => {
    const navigation = useNavigation()
    const isRecipeComplete = recipes.isRecipeComplete(item.id)
    const isRecipeInProgress = recipes.isRecipeInProgress(item.id)
    return (
        <View style={styles.recipeItemContainer}>
            <Pressable onPress={() => navigation.navigate('My Recipe', { id: item.id, name: item.values.name })} style={styles.recipeItem}>
                <Text style={styles.recipeItemTitle} >{item.values.name}</Text>
            </Pressable>
            {isRecipeInProgress && !isRecipeComplete && <Text style={[styles.inProgressTitle]}>in progress</Text>}
            {isRecipeComplete && <Text style={[styles.inProgressTitle]}>has been completed</Text>}
            <View style={styles.starsContainer}>
                <Stars
                    default={item.stars}
                    count={5}
                    starSize={20}
                    update={(val) => recipes.addNewPropetyToRecipe(item.id, 'stars', val)}
                    fullStar={<Icon name={'star'} style={[styles.myStarStyle]} size={20} />}
                    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} size={20} />}
                    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} size={20} />}
                />
            </View>
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
    inProgressTitle: {
        marginTop: 22,
        marginLeft: 10,
        color: 'grey',
    },
    recipeItemContainer: {
        paddingLeft: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    recipeItemTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    recipeItem: {
        marginTop: 20,
        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        // width: '100%',
    },
    starsContainer: {
        // backgroundColor: 'blue'
        marginTop: 20,
        marginLeft: 'auto',
        paddingRight: 5,
    },
    myStarStyle: {
        color: 'black',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }
});
