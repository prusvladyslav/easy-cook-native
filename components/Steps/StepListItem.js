import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import { CheckBox, Icon } from '@rneui/themed';
import { recipes } from '../../stores';
import { observer } from 'mobx-react-lite'
export const StepListItem = observer(({ id, recipeId }) => {
    const step = recipes.getItemById('steps', id, recipeId)
    const stepIsValid = !!step.name
    const onCheck = () => {
        recipes.editItemById('steps', id, recipeId, 'checked', !step.checked)
    }
    return (
        <View style={styles.ingridients} key={id}>
            {stepIsValid && 
                <>
                <CheckBox
                center
                containerStyle={{ backgroundColor: 'none', margin: 0, padding: 0 }}
                checked={step.checked}
                onPress={() => onCheck()}
            />
            <Text style={styles.ingridient}>{step.name}</Text>
            </>
            }     
        </View>
    )
})
const styles = StyleSheet.create({
    ingridients: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 0,
    },
    ingridient: {
        flex: 1,
        // marginHorizontal: 10,
        marginVertical: 10,
        flexWrap: 'wrap'
    },
})