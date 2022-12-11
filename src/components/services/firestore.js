import { initializeApp } from "firebase/app";
import {
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc,
    query,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn5D3e8la9rx97rcduNDB42I7X_BHzS90",
  authDomain: "react-34815-a611f.firebaseapp.com",
  projectId: "react-34815-a611f",
  storageBucket: "react-34815-a611f.appspot.com",
  messagingSenderId: "598221687476",
  appId: "1:598221687476:web:b5a7c71d1cc73445ab65e1"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default async function getItems(){
    const collectionProductsRef = collection(database, "products")
    const documentSnapshot = await getDocs(collectionProductsRef)
    const documentsData = documentSnapshot.docs.map( doc => {
        return{
            ...doc.data(),
            id: doc.id
        };
    });
    return documentsData;
}

export async function getSingleItem(idParams){
    const docRef = doc(database, "products", idParams);
    const docSnapshot = await getDoc(docRef);

    return {
        ...docSnapshot.data(),
        id: docSnapshot.id
    }
}

export async function getItemsByCategory(categoryParams){
    const collectionRef = collection(database, "products");
    const queryCat = query(collectionRef, where("category", "==", categoryParams))
    const documentSnapshot = await getDocs(queryCat);
    const documentsData = documentSnapshot.docs.map((doc) => {
        return{
            ...doc.data(),
            id: doc.id,
        }
    })
    return documentsData;
}

export async function createOrder(order){
    const collectionRef = collection(database, "orders");
    const docOrder = await addDoc(collectionRef, order);
    
    return docOrder.id;
}