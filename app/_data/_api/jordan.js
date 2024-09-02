import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { db, firebaseStorage } from "../firebaseConfig";

const jordanCollection = collection(db, "jordan");

/* -------------------------------  Get Data Objects --------------------------- */

export async function getJordanData() {
  try {
    const data = await getDocs(jordanCollection);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (error) {
    throw new Error("Can't Get Jordan Items");
  }
}

/* -------------------------------  Get Jordan Images --------------------------- */
export async function getJordanImages(folderName) {
  try {
    const folderRef = ref(firebaseStorage, `${folderName}/`);
    const res = await listAll(folderRef);
    const imageUrls = [];
    for (const itemRef of res.items) {
      const url = await getDownloadURL(itemRef);
      imageUrls.push(url);
    }
    return imageUrls;
  } catch (error) {
    throw new Error("Can't Get Jordan Images");
  }
}

/* ------------------------------- Get Jordan Data with Images --------------------------- */
export async function getJordanDataWithImages() {
  try {
    // Step 1: Get all Jordan data objects
    const dataObjects = await getJordanData();

    // Step 2: Use Promise.all to fetch images for all objects concurrently
    const dataWithImages = await Promise.all(
      dataObjects.map(async (obj) => {
        const folderName = obj.folderName; // Assuming each object has a folderName property

        // Fetch images for the given folder name
        const images = await getJordanImages(folderName);

        // Step 3: Return the object with its associated images in a new property called foldernamepic
        return {
          ...obj,
          foldernamepic: images, // Add images under 'foldernamepic'
        };
      })
    );

    return dataWithImages; // Step 4: Return the combined array
  } catch (error) {
    throw new Error("Can't Get Jordan Data with Images");
  }
}
