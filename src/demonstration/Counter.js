import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";


const Counter = () =>{

    const [count, setCount] = useState(0)
    const [newCount, setnewCount] = useState(0)
    useEffect(() =>{
        console.log(`Count change`)
        return(
            console.log('useEffect clean up')
        )
    }, [count])

    return(
        <View style={styles.container}>
            <Text style={styles.title}> {`Count:  ${count} `} </Text>
            <Button
                color={'red'}
                title={'Increase Count'}
                onPress={
                    () => {
                        setCount(count + 1)
                    }
                }
            />
            <Button
                color={'green'}
                title={'Decrease Count'}
                onPress={
                    () => { 
                        setCount(count - 1)
                    }
                }
            />
            <Button
                color={'red'}
                title={'Increase Count'}
                onPress={
                    () => {
                        setnewCount(count + 1)
                    }
                }
            />
            <Button
                color={'green'}
                title={'Decrease Count'}
                onPress={
                    () => { 
                        setnewCount(count - 1)
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'orange'
    },
    title:{
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})
export default Counter