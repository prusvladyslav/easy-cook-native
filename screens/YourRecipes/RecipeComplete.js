import { Text, View, StyleSheet, Pressable } from 'react-native'
import { recipes } from '../../stores'
import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { observer } from 'mobx-react-lite';
export const RecipeComplete = observer(({ navigation, route: { params: { id,name } } }) => {
    const startOver = () => {
        recipes.startOverRecipe(id)
        navigation.navigate('My Recipe', { id: id,name:name })
    }
    const onViewAll = () => {
        navigation.navigate('My Recipes')
    }
    const onDelete = () => {
        recipes.deleteRecipe(id)
        navigation.navigate('My Recipes')
    }
    const recipeStars = recipes.getRecipeById(id).stars
    return (
        <View style={styles.container}>
            <Text>Wow you made {name}!</Text>
            <Pressable onPress={() => startOver()}>
                <Text style={styles.startOver}>Want to start over this recipe?</Text>
            </Pressable>
            <Pressable onPress={() => onViewAll()}>
                <Text style={styles.startOver}>View all recipes</Text>
            </Pressable>
            <View style={styles.starsContainer}>
                <Stars
                    default={recipeStars}
                    count={5}
                    starSize={40}
                    update={(val) => recipes.addNewPropetyToRecipe(id, 'stars', val)}
                    fullStar={<Icon name={'star'} style={[styles.myStarStyle]} size={40} />}
                    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} size={40} />}
                    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} size={40} />}
                />
            </View>
            {recipeStars && recipeStars <= 3 && (
                <View>
                    <Text>Looks like you don't like this recipe</Text>
                    <Pressable onPress={() => onDelete()}>
                        <Text style={styles.deleteIt}>Delete it?</Text>
                    </Pressable>
                </View>)
            }
        </View>
    )
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    starsContainer: {
        marginVertical: 20,
    },
    startOver: {
        color: 'blue',
        marginTop: 10
    },
    deleteIt: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 10,
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
