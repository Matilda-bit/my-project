import React from 'react';
import { 
    View,
    Text, 
    StyleSheet 
} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Header from '../components/Header';

const FiltersScreen = props => {
    return (
        <View style = {styles.screen}>
            <Text>The Filter Screen!!!</Text>
        </View>
    );
};

//134

FiltersScreen.navigationOptions = (navData) =>{
    return {
        headerTitle: 'Filter Places',
        headerRight: () => <Header />,
        //burger menu
        headerLeft:  () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
   };
};


const styles = StyleSheet.create({
screen:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
}

});

export default FiltersScreen;