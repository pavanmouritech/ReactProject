import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    logo:{
        bottom:15,
    },
    loginLogo:{
        bottom:50,
        right:20,
    },
    text:{
        fontSize:25,
        bottom:35,
        fontFamily:'Arial',
        fontWeight:'400',
        color:'#464646',
    },
    textView:{
        height:50,
        width:150,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#006296',
        borderRadius:25,
        flexDirection:'row',
        borderColor:'#fff',
    },
    login:{
        fontSize:18,
        color:'#fff',
        fontFamily:'Arial',
    },
    greaterthan:{
        top:1,
        left:5,
        color:'#fff',
    },
    footer:{
        top:70,
        margin:70,
    },
});

export default styles;