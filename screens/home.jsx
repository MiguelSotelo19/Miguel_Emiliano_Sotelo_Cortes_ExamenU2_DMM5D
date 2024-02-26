import { StyleSheet, Text, View, Modal, ScrollView } from 'react-native';
import { Card, Image } from '@rneui/themed';
import { useEffect, useState } from 'react';

Home = () => {

    let [modal, setModalVisible] = useState(false);
    let [estado, setEstado] = useState(require('../assets/cat-blink.gif'));
    let [publicaciones, setPublicaciones] = useState([]);
    let [estados, setEstados] = useState([]);

    const closeModal = () => {
        setModalVisible(false);
    }

    const openModal = (img) => {
        setEstado(img);
        setModalVisible(true);
    }


    useEffect(() => {
        const newData = [
        { name: "Miguel", img: require('../assets/cameraman.jpg'), perfil: require('../assets/perfil/perfil02.jpg'), descripcion: 'Hola'},
        { name: "Angel", img: require('../assets/wallpaper1.jpg'), perfil: require('../assets/perfil/perfil03.jpg'), descripcion: 'Adios' },
        { name: "Gaby", img: require('../assets/wallpaper2.jpg'), perfil: require('../assets/perfil/perfil04.jpg'), descripcion: 'Hola Mundo'},
        ];

        const newData2 = [
            { name: "Emi", img: require('../assets/perfil/perfil01.jpg'), gif: require("../assets/hola-gatito.gif") },
            { name: "Miguel", img: require('../assets/perfil/perfil02.jpg'), gif: require("../assets/cat-blink.gif") },
            { name: "Angel", img: require('../assets/perfil/perfil03.jpg'), gif: require("../assets/shocked-cat.gif") },
            { name: "Gaby", img: require('../assets/perfil/perfil04.jpg'), gif: require("../images/elzapato.gif") },
            { name: "Mario", img: require('../assets/perfil/perfil01.jpg'), gif: require("../images/chipi-chipi-chapa-chapa.gif") },
            { name: "Flor", img: require('../assets/perfil/perfil02.jpg'), gif: require("../assets/cat-blink.gif") }
        ];
    
        setEstados(newData2);

        setPublicaciones(newData);
    }, []);


    return(
        <View style={{marginTop: 30, marginBottom: 100, backgroundColor: 'black'}}>
            <ScrollView horizontal={true} style={styles.estados}>
                {
                    estados.map((item, index) => {
                        return (
                            <View style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
                            <Image style={styles.perfil} source={item.img} onLongPress={() => openModal(item.gif)} onPressOut={closeModal} />
                            <Text style={{color: 'white', fontSize: 15, alignSelf: 'center'}}>{item.name}</Text>
                        </View>
                        )
                    })
                }
            </ScrollView>

            <ScrollView>
            {
                publicaciones.map((item, index) => {
                    return (
                        <Card>
                            <Card.Title style={{alignSelf: 'flex-start'}}>
                                <Image style={styles.perfil2} source={item.perfil} />
                                <Text style={{ fontWeight: 'bold', width: 'auto'}}>{item.name}</Text>
                            </Card.Title>
                            
                            <Card.Divider />

                            <View style={{width: '100%', height: 300}}>
                                <Image style={styles.publicacion} source={item.img} />
                            </View>

                            <Card.Divider />

                            <View style={styles.icons}>
                                <View style={{display: 'flex', flexDirection: 'row'}}>
                                    <Image style={styles.icono} source={require('../assets/perfil/amor.png')} />
                                    <Image style={styles.icono} source={require('../assets/perfil/comentario.png')} />
                                    <Image style={styles.icono} source={require('../assets/perfil/enviar.png')} />
                                </View>
                                

                                <Image style={styles.icono} source={require('../assets/perfil/guardar.png')} />
                            </View>

                            <Card.Divider />
                            
                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}} >{item.name}</Text>
                                <Text style={{marginLeft: 10, fontSize: 16}} >{item.descripcion}</Text>
                            </View>

                        </Card>
                    );
                })
            }
            </ScrollView>

            <Modal visible={modal} animationType='fade' transparent>
                <View style={styles.modal}>
                <Image style={styles.estado} source={estado} />
                </View>
            </Modal>
            
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    perfil: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
        marginLeft: 20
    },
    perfil2: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderColor: 'purple',
        borderWidth: 4,
    },
    estados: {
        display: 'flex',
        flexDirection: 'row',
        height: 92
    },
    publicacion: {
        width: '100%',
        height: '100%'
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    icono: {
        width: 30,
        height: 30,
        marginLeft: 10
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
})