import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import RadioButton from '../../props/RadioButton';

const InitGender = props => {
    const [maleCheck, setMaleCheck] = useState(true);
    const [femaleCheck, setFemaleCheck] = useState(false);
    const [genderCheck, setGenderCheck] = useState('male');

    const maleCheckHandler = () => {
        if(femaleCheck) {
            setFemaleCheck(false);
            setMaleCheck(true);
            setGenderCheck('male');
        } else{
            setMaleCheck(true);
            setGenderCheck('male');
        }
    }

    const femaleCheckHandler = () => {
        if(maleCheck) {
            setFemaleCheck(true);
            setMaleCheck(false);
            setGenderCheck('female');
        } else{
            setFemaleCheck(true);
            setGenderCheck('female');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.blockContainer}>
                <Text style={styles.headingText}>Gender:</Text>
                <RadioButton checked={maleCheck} imgGender='m' onPress={maleCheckHandler} />
                <RadioButton checked={femaleCheck} imgGender='f' onPress={femaleCheckHandler} />
            </View>
            <Text style={styles.headingText}>Gender: {genderCheck}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2389da',
    },
    blockContainer: {
        backgroundColor: '#fff',
        width: '97%',
        marginLeft: 6,
        elevation: 3,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    headingText: {
        fontSize: 19,
        fontWeight: '400',
        
    }
});

export default InitGender;