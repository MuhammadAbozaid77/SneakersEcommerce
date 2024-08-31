import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { db, firebaseStorage } from "../firebaseConfig";

const footballshoesCollection = collection(db, "footballshoes");

/* -------------------------------  Get Data Objects --------------------------- */

export async function getFootballShoesData() {
  try {
    const data = await getDocs(footballshoesCollection);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (error) {
    throw new Error("Can't Get FootballShoes Items");
  }
}

/* -------------------------------  Get FootballShoes Images --------------------------- */
export async function getFootballShoesImages(folderName) {
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
    throw new Error("Can't Get FootballShoes Images");
  }
}

/* ------------------------------- Get FootballShoes Data with Images --------------------------- */
export async function getFootballShoesDataWithImages() {
  try {
    // Step 1: Get all FootballShoes data objects
    const dataObjects = await getFootballShoesData();

    // Step 2: Use Promise.all to fetch images for all objects concurrently
    const dataWithImages = await Promise.all(
      dataObjects.map(async (obj) => {
        const folderName = obj.folderName; // Assuming each object has a folderName property

        // Fetch images for the given folder name
        const images = await getFootballShoesImages(folderName);

        // Step 3: Return the object with its associated images in a new property called foldernamepic
        return {
          ...obj,
          foldernamepic: images, // Add images under 'foldernamepic'
        };
      })
    );

    return dataWithImages; // Step 4: Return the combined array
  } catch (error) {
    throw new Error("Can't Get FootballShoes Data with Images");
  }
}
