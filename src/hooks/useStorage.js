import { useEffect, useState } from "react";
import { storage, db } from "../firebase/config";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //References
    const storageRef = storage.ref(`images/${file.name}`);
    const collectionRef = db.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => setError(err.message),
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({ url, createdAt: Date.now(), name: file.name });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
