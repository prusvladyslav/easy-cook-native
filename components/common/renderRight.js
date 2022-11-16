import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
export const renderRightActions = (
    progress,
    dragX,
    id,
    onDelete,
    setState,
) => {
    const opacity = dragX.interpolate({
        inputRange: [-150, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
  
    return (
        <View style={styles.swipedRow}>
            <View style={styles.swipedConfirmationContainer}>
            <Pressable onPress={() => onDelete(setState)} style={styles.deleteButtonText} >
                <Text style={styles.title} >Delete</Text>
                </Pressable>
            </View>
       </View>
    );
};

const styles = StyleSheet.create({
    swipedRow: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingLeft: 5,
        backgroundColor: '#b60000',
        margin: 20,
        minHeight: 50,
    },
    swipedConfirmationContainer: {
        flex: 1,
    },
    deleteButtonText: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    title: {
        color: 'white',
    }
});