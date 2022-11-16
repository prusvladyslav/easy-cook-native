import {Text,View,StyleSheet} from 'react-native'
import { StepListItem } from './StepListItem'
export const StepsList = ({steps,recipeId}) => {
        const hasSteps = steps.length > 0 && steps[0].name 
    return (
        <View style={styles.container}>
        {hasSteps && <Text style={styles.item}>Steps to cook: </Text>}
        {hasSteps && steps.map((item,index) => {
              
            return (
               <StepListItem id={item.id} recipeId={recipeId} key={item.id}/>
    
            // <View/>
            )
        })}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // marginVertical: 20,
        // flex: 2,
        // backgroundColor: 'red',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    item: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10,
    },
})