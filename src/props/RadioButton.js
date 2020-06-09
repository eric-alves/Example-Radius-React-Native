import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, 
    ImageBackground, 
    TouchableOpacity} from 'react-native';
const imgMale = require('../assets/imgs/male.png');
const imgFemale = require('../assets/imgs/female.png');

const RadiosButton = props => {
    return (
        <TouchableOpacity style={[styles.circle, { borderColor: '#000077' }]}
            onPress={props.onPress}>
            <ImageBackground 
                source={
                    props.imgGender == 'm' ? imgMale : imgFemale
                } 
                style={styles.img} 
                imageStyle = { {  borderRadius : 50  } }>
                {props.checked ? (<View style={styles.checkedCircle} />) : (<View />)}
            </ImageBackground>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    circle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 0,
        borderColor: '#ACACAC',
        marginHorizontal: 10,
    },
    img:{
        height: 100,
        width: 100,
        borderWidth: 0,
        borderRadius: 50,
        borderColor: '#123123',
    },
    checkedCircle: {
        height: 100,
        width: 100,
        borderWidth: 3,
        borderRadius: 50,
        borderColor: '#77dd77',
    }
});

export default RadiosButton;