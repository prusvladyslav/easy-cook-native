import { Button, View, StyleSheet, Text,ScrollView } from 'react-native'
import { recipes } from '../../stores'
import React, { useState,useMemo } from 'react'
import { TextInput } from 'react-native-paper';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'
import { Formik } from 'formik';
import { AddIngridient, AddSteps } from '../../components';
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

});


export const CreateRecipeForm = ({setIsCreated}) => {
    const [ingridients, setIngridients] = useState([])
    const [name,setName] = useState('')
    const [steps,setSteps] = useState([])
    const canRecipeBeCreatedByItems = useMemo(() => {
        const hasValidName = name.length > 0
        const hasValidItem = (item) => item.length > 0 && item.some((item) => !!item.name)
       
        return hasValidName && hasValidItem(ingridients) && hasValidItem(steps)
    },[steps,ingridients])
  return (
    <Formik
    initialValues={{ name: '' }}
    onSubmit={(values, { resetForm }) => {
        recipes.addNewRecipe({ values, id: nanoid(), ingridients: ingridients,steps: steps })
        resetForm()
        setIsCreated(true)
    }}>
   
    {({ handleChange, handleBlur, handleSubmit, values,setFieldValue}) => (
        <ScrollView>
        <View style={styles.container}>
            <TextInput
                onChangeText={(value) => {
                    setFieldValue('name',value)
                    setName(value)
                }}
                onBlur={handleBlur('name')}
                value={values.name}
                label="Recipe's name"
                activeUnderlineColor='black'
            />
            <AddIngridient ingridients={ingridients} setIngridients={setIngridients} />
            <AddSteps steps={steps} setSteps={setSteps}/>
            <Button disabled={!canRecipeBeCreatedByItems} onPress={handleSubmit} title="Create" />
        </View>
        </ScrollView>
   )}
   
</Formik>
  )
}