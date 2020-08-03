import firebase, { firestore } from 'firebase/app';

// permite poder consulta a la coleccion
// tablas o documentos 
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvqCLnF5_gLb-A8OKFyN_q1LZk1l6aoks",
    authDomain: "proyect-react-32fb1.firebaseapp.com",
    databaseURL: "https://proyect-react-32fb1.firebaseio.com",
    projectId: "proyect-react-32fb1",
    storageBucket: "proyect-react-32fb1.appspot.com",
    messagingSenderId: "731693274547",
    appId: "1:731693274547:web:be62c0b97cdd79a37327c6"
    //measurementId: "G-P40FH78CMD"
  };
// inicializa firebase a partir de las constante  de configuraciones
firebase.initializeApp(config);

//  crear Perfil
export const createUserProfileDocument =async (userAuth,addtionalData) => {
    // async sincroniza evento
    // si no viene usuario autentificado
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // obtener los datos 
    const snapShot = await userRef.get();


    // no existe
    if(!snapShot.exits){
        // destructuring  de objeto
        // sirve para extraer propiedades en especificas
        // de algunos datos 
            const {displayName,email} = userAuth;
            const createAt = new Date();
            try{
                await userRef.set({
                    displayName,
                    email,
                    createAt,
                    ...addtionalData,
                    // ... sirve para crear una copia del objeto
                });
            } catch(error){
                console.log('error creating user',error.message);
            }
    }
    return  userRef;
};
// asigna toda las autentificacion 
export const auth = firebase.auth();

export const firestore = firebase.firestore();
// asigno el proveedor 
const provider = new firebase.auth.GoogleAuthProvider;
// selecciona cuenta con google
provider.setCustomParameters({prompt: 'select_account'});
// se abriura un poupup con las cuentas de google 
export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;