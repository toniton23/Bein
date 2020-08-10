import React from 'react'
import { View, Text, Animated } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


const Animated = Animated.createAnimatedComponent(FontAwesome)

export default function boytom() {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
<Animated.View style={{
    flexGrow: 1,
    flexDirection: 'row',
}}>

</Animated.View>
        </TouchableWithoutFeedback>
        <View>
            <Text></Text>
        </View>
    )
}
