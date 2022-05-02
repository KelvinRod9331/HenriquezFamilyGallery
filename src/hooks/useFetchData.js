import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFetchData = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
   const unsubscribe = db.collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        console.log('here',snap)
        let documents = snap.docs.map((doc) =>
          Object.assign({ id: doc.id }, doc.data())
        );
        setDocs(documents);
      });
    //onSnapshot returns a function to un subscribe method that will stop when the collection isn't being used
    return () => unsubscribe()
  }, [collection]);

  return { docs };
};

// const useGetImage = () => {
//     const [images, setImages] = useState([]);

//     useEffect(async () => {
//       let data = await db.collection("photos").get();
//       data = data.docs.map((d) => Object.assign({ id: d.id }, d.data()));
//       setImages(data);
//     }, []);

//     return images;
//   };

export default useFetchData;
