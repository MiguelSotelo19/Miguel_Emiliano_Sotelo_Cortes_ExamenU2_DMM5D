import { Image } from "@rneui/themed";
import { StyleSheet, TextInput, View, Modal } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

Search = () => {

    let [modal, setModalVisible] = useState(false);
    let [estado, setEstado] = useState(require('../assets/cat-blink.gif'));

    const closeModal = () => {
        setModalVisible(false);
    }

    const openModal = (img) => {
        setEstado(img);
        setModalVisible(true);
    }

    return(
        <View style={{marginTop: 30, marginBottom: 100}}>
            <View style={styles.search}>
                <Feather name="search" size={35} style={{marginTop: 6}} color="white" />
                <TextInput style={styles.input} placeholderTextColor={'white'} placeholder="Buscar" />
            </View>

            <View style={styles.posts}>
            <View>
                <Image style={styles.postimg } source={require('../images/post4.jpg')}/>
                <Image style={styles.postimg} source={require('../images/post5.jpg')}/>
                <Image style={styles.postimg} source={require('../images/post6.jpg')}/>
            </View>
            <View>
                <Image style={styles.postimg} source={require('../images/chipi-chipi-chapa-chapa.gif')} onLongPress={() => openModal(require("../images/chipi-chipi-chapa-chapa.gif"))} onPressOut={closeModal}/>
                <Image style={styles.postimg} source={require('../images/cat-blink.gif')} onLongPress={() => openModal(require("../images/cat-blink.gif"))} onPressOut={closeModal}/>
                <Image style={styles.postimg} source={require('../images/elzapato.gif')} onLongPress={() => openModal(require("../images/elzapato.gif"))} onPressOut={closeModal}/>
            </View>
            <View>
                <Image style={styles.postimg} source={require('../images/post2.jpg')}/>
                <Image style={styles.postimg} source={require('../images/post1.jpg')}/>
                <Image style={styles.postimg} source={require('../images/post3.jpg')}/>
            </View>
        </View>
            
        <Modal visible={modal} animationType='fade' transparent>
                <View style={styles.modal}>
                <Image style={styles.estado} source={estado} />
                </View>
        </Modal>

        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    search: {
        width: '100%',
        height: 49,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 5
    },
    input: {
        backgroundColor: 'grey',
        width: '85%',
        height: 35,
        marginTop: 6,
        marginLeft: 15,
        borderRadius: 5,
        color: 'white',
        textAlign: 'center'
    },
    postimg: {
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 5,
        marginTop: 20
      },
    posts: {
        flexDirection: 'row',
        backgroundColor: '#16181c',
        width: '100%',
        height: '100%',
        paddingTop: 20,
        padding: 30
    },
    modal: {
        width: '100%',
        marginTop: 200,
        backgroundColor: 'white'
    },
    estado: {
        width: '100%',
        height: 400,
        paddingTop: 100
    }
});