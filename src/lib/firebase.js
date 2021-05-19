import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBf1ycY51qr2hbuxAFOnD9XMAfrN8rCN7k',
  authDomain: 'instagram-clon-a91f6.firebaseapp.com',
  projectId: 'instagram-clon-a91f6',
  storageBucket: 'instagram-clon-a91f6.appspot.com',
  messagingSenderId: '1024381465531',
  appId: '1:1024381465531:web:d08da5710fec3c33b54a9e'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase)

export { firebase, FieldValue };
