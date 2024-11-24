import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, Stylesheet} from 'react-native';

//add contacts!!!!!
export default function ContactListScreen({navigation}) {
    const [contacts, setContacts] = useState([
        {id: '1', name: 'John Smith', phone: '02 9988 2211'},
        {id: '2', name: 'Sue White', phone: '03 8899 2255'},
    ]);

    return (
        <View style = {styles.container}>
            <FlatList>
                data = {contacts}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) => (
                    <ToucheableOpacity onPress = {() => navigation.navigate('ContactDetails', {contact: item})}>
                        <View style = {styles.contactCard}>
                            <Text style = {styles.contactName}>{item.name}</Text>
                            <Text style = {styles.contactPhone}>{item.phone}</Text>
                        </View>
                    </ToucheableOpacity>
                )}
            </FlatList>

            <TouchableOpacity style = {styles.addButton} onPress = {() => navigation.navigate('AddEditContact', {mode: 'add'})}>
                <Text style = {styles.addButtonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgrounColor: '#fff'
    },
    contactCard: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    contactName: {
        fontSize: 18
    },
    contactPhone: {
        fontSize: 14, 
        color: '#666'
    },
    addButton: {
        backgrounColor: '#cb6d4f',
        padding: 16,
        position: 'absolute',
        bottom: 16,
        right: 16,
        borderRadius: 50
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
});