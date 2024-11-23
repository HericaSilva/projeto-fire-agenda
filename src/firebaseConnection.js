import { initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDIzQ506fcjaU5UU2-wY5joxCi_ZlVTjlM",
    authDomain: "projeto-agendafire.firebaseapp.com",
    projectId: "projeto-agendafire",
    storageBucket: "projeto-agendafire.firebasestorage.app",
    messagingSenderId: "330562815752",
    appId: "1:330562815752:web:e3db1bc266fd1accfd0ebd",
    measurementId: "G-QNBM81K0RV"
  };

  const firebaseapp = initializeApp(firebaseConfig);
  
  const db = getFirestore(firebaseapp);
  const auth = getAuth(firebaseapp);

  export {db, auth};