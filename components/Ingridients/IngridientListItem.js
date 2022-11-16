import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import { CheckBox, Icon } from '@rneui/themed';
import { recipes } from '../../stores';
import { observer } from 'mobx-react-lite'
export const IngridientListItem = observer(({ id, recipeId }) => {
    const ingridient = recipes.getItemById('ingridients', id, recipeId)
    const ingridientIsValid = !!ingridient.name 
    const onCheck = () => {
        recipes.editItemById('ingridients', id, recipeId, 'checked', !ingridient.checked)
    }
    return (
        <View style={styles.ingridients} key={id}>
              {ingridientIsValid && 
               <>
                <CheckBox
                center
                containerStyle={{ backgroundColor: 'none', margin: 0, padding: 0 }}
                checked={ingridient.checked}
                onPress={() => onCheck()}
              />
             <Text style={styles.ingridient}>{ingridient.name}</Text>
             </>
             }
            {ingridientIsValid && ingridient.quantity && <Text style={styles.ingridient}> - {ingridient.quantity}</Text>}
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
        // marginHorizontal: 10,
        marginVertical: 10,
    },
})