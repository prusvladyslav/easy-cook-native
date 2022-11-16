import * as React from 'react';
import { Modal, Portal, Text, Button} from 'react-native-paper';
import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export const MyRecipeSettings = ({}) => {
const navigation = useNavigation()
  const onOpenSettings = () => {
navigation.navigate('Settings')
  }
    return (
        <View style={style.container}>
            <Pressable onPress={() => onOpenSettings()}>
            <MaterialCommunityIcons name="cog" color={'black'} size={'30'} />
            </Pressable>
        </View>
    );
};


const style = StyleSheet.create({
    container: {
        marginRight: 10,
    },
})
