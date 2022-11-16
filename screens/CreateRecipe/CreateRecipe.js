import React,{useEffect, useState} from 'react'
import {View,Text} from 'react-native'
import { CreateRecipeForm } from './CreateRecipeForm';
import { CreateMore } from './CreateMore';
import { observer } from 'mobx-react-lite';
import { recipes } from '../../stores';
export const CreateRecipe = observer(({navigation}) => {
    const [isCreated,setIsCreated] = useState(false)
    const hasNoRecipes = recipes.hasRecipe()
    useEffect(() => {
      if(hasNoRecipes) setIsCreated(false)
    },[hasNoRecipes])
    return (
        <View style={{flex: 1}}>
            {isCreated ? <CreateMore navigation={navigation} setIsCreated={setIsCreated}/> : <CreateRecipeForm setIsCreated={setIsCreated} />}
        </View>
    )
})