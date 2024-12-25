import { View,Text } from 'react-native';
import {MenuOption} from 'react-native-popup-menu';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export const MenuItem=({text,action,value,icon})=>{
    return(
        <MenuOption onSelect={()=>action(value)}>
            <View className="px-4 py-1 flex-row justify-between items-center">
                <Text>icon</Text>
                <Text>text</Text>
            </View>

        </MenuOption>

    )
}