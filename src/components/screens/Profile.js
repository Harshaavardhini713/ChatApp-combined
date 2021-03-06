import React,{useState} from "react";
import{
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    LogBox,
    TextInput
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";
import updateProfile from "..//UpdateProfile";
import {useSelector,useDispatch} from 'react-redux';
import {setName,setAvatar,setLogout} from '../../redux/actions/usersActions'
import instance from '../../config/axiosConfig';


function Profile({navigation})
{

    LogBox.ignoreAllLogs();


    const{id,uid,name,phone,password,avatar,isLogin}=useSelector(state=>state.chatuser);
    
    const[image,setImage]=useState(avatar);
    // const profile = instance.get('users/profile');
    // if(profile)
    //           {
    //             const id = profile.data[0]._id;
    //             const name = profile.data[0].name;
    //             const avatar = profile.data[0].avatar;
    //             const uid = profile.data[0].uid;
    //           }
    const dispatch=useDispatch();
    //const[name,setName]=useState('Kashyap');
    const[newName,setNewName]=useState(name);
    const[updatedName,setUpdatedName]=useState(name);

    const[isPicAvailabe,setIsPicAvailabe]=useState(true);

    const[snapPointValue,setSnapPointValue]=useState(420);

    bs=React.useRef(null);
    fall=new Animated.Value(1);

    const takePhotoFromCamera = () =>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setImage(image.path);
            updateProfile.changePhoto(phone,password,uid,image.path);
            dispatch(setAvatar(image.path))
            if(!isPicAvailabe)
            {
                setIsPicAvailabe(true);
                setSnapPointValue(420);
            }
            bs.current.snapTo(1)
          });
    }

    const choosePicFromLibrary = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setImage(image.path);
            console.log(name);
            updateProfile.changePhoto(phone,password,uid,image.path);
            dispatch(setAvatar(image.path))
            if(!isPicAvailabe)
            {
                setIsPicAvailabe(true);
                setSnapPointValue(420);
            }
            bs.current.snapTo(1)
          });
    }

    const removeProfilePic = () =>{
        setImage('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');
        const newAvatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        dispatch(setAvatar(newAvatar));
        updateProfile.changePhoto(phone,password,uid,newAvatar);
        setIsPicAvailabe(false);
        setSnapPointValue(380);
        bs.current.snapTo(1)
    }

    const renderInner = () =>(
        <View style={styles.panel}>

            <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.panelButton} onPress={choosePicFromLibrary}>
                    <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>

            {
                isPicAvailabe ? (<TouchableOpacity style={styles.panelButton} onPress={removeProfilePic}>
                    <Text style={styles.panelButtonTitle}>Remove Profile Photo</Text>
                </TouchableOpacity>) : (<></>)
            }

            
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>

        </View>
    )

    const renderHeader = () =>(
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    )

  const logout = async () => {
    console.log('in logout');
    try {
      const response = await instance.post('logout');
      if (response.status === 201 || response.status === 200) {
        console.log(`User Signed out: ${response.data}`);
        dispatch(setLogout());
        Alert.alert('Successful Sign Out', 'You have successfully signed out');
      } else {
        console.log(`User couldn't be signed out: ${response.data}`);
        Alert.alert(
          "User couldn't be signed out",
          'There was an error while signing out, please try again',
        );
      }
    } catch (error) {
      if (error.response) {
        const err = error.response.data;
        Alert.alert('Error', err);
      } else if (error.request) {
        Alert.alert('Error', error.request);
        console.log(error.request);
      } else {
        console.log('Error', error.message);
        Alert.alert('Error', error.message);
      }
    }
  };


    return(
        <View style={styles.mainContainer}>

            <BottomSheet
                ref={bs}
                snapPoints={[snapPointValue,0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <View style={styles.profileHeader}>
                <Image style={styles.image} source={{uri:image}}/>
                <TouchableOpacity onPress={()=>bs.current.snapTo(0)}>
                    <Text>Change Profile Picture</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.profileText}>Name</Text>

                <View style={styles.profileBody}>
                    <TextInput
                        style={styles.profileBody1}
                        placeholder={updatedName}
                        onChangeText={(value)=>{setNewName(value)}}
                    />
                    <TouchableOpacity style={styles.iconStyle} onPress={()=>{setUpdatedName(updatedName);dispatch(setName(newName));updateProfile.changeName(phone,password,uid,newName);alert('Name Changed!!!')}}>
                        <Icon name="floppy-o" size={30} color='#808e9b'/>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.profileText}>Phone Number</Text>
                    <Text style={[styles.profileBody,styles.profileBody1]}>{phone}</Text>
                </View>

            </View>

            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={()=>{logout()}}>
                    <Text style={styles.logoutButtonText}>{'Logout'}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Profile;

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        paddingTop:20,
    },
    profileHeader:{
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        borderColor: '#FFF',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    profileText:{
        color:'#fff',
        fontSize:20,
        marginTop:20,
        marginBottom:10
    },
    subContainer:{
        paddingHorizontal:20
    },
    profileBody:{
        width:'100%',
        height:50,
        backgroundColor:'#333',
        borderRadius:6,
        marginTop:10,
        paddingHorizontal:10,
        fontSize:16,
        color:'#808e9b',
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    iconStyle:{
        paddingTop:8
    },
    profileBody1:{
        fontSize:20,
        paddingTop:8
    },
    logoutButton:{
        backgroundColor:'#833471',
        paddingVertical:12,
        borderRadius:6,
        marginTop:20
    },
    logoutButtonText:{
        fontSize:20,
        fontWeight:'500',
        color:'#fafafa',
        alignSelf:'center'
    },
    panel: {
        padding: 20,
        backgroundColor: '#374144',
        paddingTop: 20
      },
    header: {
        backgroundColor: '#FFFFFF',
        paddingTop: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 50,
        height: 10,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#83a6b0',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
})