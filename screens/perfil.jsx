import { StyleSheet, Text, View, Modal } from 'react-native';
import { useState } from 'react';
import { Image } from "@rneui/themed";

Perfil = () => {

    let [modal, setModalVisible] = useState(false);
    let [estado, setEstado] = useState(require('../assets/cat-blink.gif'));

    const closeModal = () => {
        setModalVisible(false);
    }

    const openModal = (img) => {
        setEstado(img);
        setModalVisible(true);
    }

  return (
    <View style={{backgroundColor:'#16181c'}}>
      <View style={styles.profile}>
        <View>
            <Image style={styles.circle} source={require('../images/catboom.jpg')}/>
            <Text style={{fontWeight: 'bold', color: '#fffafa'}}>gato boom</Text>
        </View>
                
        <View style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', color: '#fffafa'}}>9</Text>
            <Text style={{color: '#fffafa'}}>Publicaciones</Text>
        </View>

        <View style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', color: '#fffafa'}}>100</Text>
            <Text style={{ color: '#fffafa'}}>Seguidores</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: '#fffafa'}}>200</Text>
            <Text style={{ color: '#fffafa'}}>Siguiendo</Text>
        </View>
      </View>

        <View style={styles.historybar}>
            <Image style={styles.circle} source={require('../images/history1.jpg')} onLongPress={() => openModal(require("../images/chipi-chipi-chapa-chapa.gif"))} onPressOut={closeModal}/>

            <Image style={styles.circle} source={require('../images/history2.jpg')} onLongPress={() => openModal(require("../images/cat-blink.gif"))} onPressOut={closeModal}/>

            <Image style={styles.circle} source={require('../images/history3.jpg')} onLongPress={() => openModal(require("../images/elzapato.gif"))} onPressOut={closeModal}/>
        </View>

        <View style={styles.posts}>
            <View>
                <Image style={styles.postimg } source={require('../images/post4.jpg')}/>
                <Image style={styles.postimg} source={require('../images/post5.jpg')}/>
                <Image style={styles.postimg} source={require('../images/post6.jpg')}/>
            </View>
            <View>
                <Image style={styles.postimg} source={require('../images/chipi-chipi-chapa-chapa.gif')}/>
                <Image style={styles.postimg} source={require('../images/cat-blink.gif')}/>
                <Image style={styles.postimg} source={require('../images/elzapato.gif')}/>
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

export default Perfil;

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    display: 'flex', 
    marginTop: 50, 
    justifyContent: 'space-evenly', 
    backgroundColor: '#16181c',
    color: '#fffafa',
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  historybar:{
    flexDirection: 'row', 
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: '#252930',
  },
  postimg: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 5,
    
  },
  posts: {
    flexDirection: 'row',
    backgroundColor: '#16181c',
    width: '100%',
    height: '100%',
    margin: '8%',
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