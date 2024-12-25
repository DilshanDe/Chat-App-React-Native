import {MenuOption} from 'react-native-popup-menu';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export const MenuItem=({text,action,value,icon})=>{
    return(
        <MenuOption onSelect={()=>action(value)}>
            

        </MenuOption>

    )
}