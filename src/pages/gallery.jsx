// import { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyBGRH1z2a-vRAhRJlALCa4ZyUz2HjXQO1M",
//   authDomain: "opal-rumble.firebaseapp.com",
//   projectId: "opal-rumble",
//   storageBucket: "opal-rumble.appspot.com/",
//   messagingSenderId: "534580202320",
//   appId: "1:534580202320:web:d2f472a9b430d4e8c53a55",
//   measurementId: "G-Z27GV436ZQ"
// };


// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// const Gallery = () =>{
//     const [imageList, setImageList] = useState([]);

//     useEffect(()=> {
//         const fetchImages = async () =>{
//             try{
               
//                 const storageRef = ref(storage, 'gs://opal-rumble.appspot.com'); 

//                 const listResult = await listAll(storageRef);
//                 const urlsPromises = listResult.items.map(async (itemRef) => {
//                   const imageUrl = await getDownloadURL(itemRef);
//                   return imageUrl;
//                 });
        
//                 Promise.all(urlsPromises)
//                   .then((urls) => {
//                     setImageList(urls);
//                   })
//                   .catch((error) => {
//                     console.error('Error fetching download URLs:', error);
//                   });
//               } catch (error) {
//                 console.error('Error fetching images', error);
//               }
//             };
//         fetchImages();

//     },[])
//     return(
//         <div>
//             <h2>Image Gallery</h2>
//       <div className="image-list">
//         {imageList.map((imageUrl, index) => (
//           <div key={index} className="image-item">
//             <img src={imageUrl} alt={`Image ${index}`} style={{ width: '300px', height: 'auto' }} />
//           </div>
//         ))}
//       </div>
//         </div>
//     )
// }

// export default Gallery
