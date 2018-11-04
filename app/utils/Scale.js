import { Dimensions } from 'react-native';
const getOrientation = () => Dimensions.get('window').width > Dimensions.get('window').height ? 'landscape' : 'potrait';
exports.widthScale = (size,handleOrientation) => {
    if(handleOrientation){
        if(getOrientation() == 'potrait'){
            return Dimensions.get('window').width * size
        }else{
            return Dimensions.get('window').height * size
        }
    }else{
        return Dimensions.get('window').width * size
    }
};

exports.heightScale = (size,handleOrientation) => {
    if(handleOrientation){
        if(getOrientation() == 'potrait'){
            return Dimensions.get('window').height * size
        }else{
            return Dimensions.get('window').width * size
        }
    }else{
        return Dimensions.get('window').height * size
    }
};

