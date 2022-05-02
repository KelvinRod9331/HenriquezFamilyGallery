import useFetchData from "../hooks/useFetchData";
import { motion } from "framer-motion";
const Gallery = ({ setSelectedImg }) => {
  const { docs: images } = useFetchData("images");
  return (
    <div className="img-grid">
      {images &&
        images.map((image) => {
          return (
            <motion.div
              onClick={() => setSelectedImg(image)}
              layout
              whileHover={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="img-wrap"
              key={image.id}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              {/* <img src={image.url} alt={image.name} /> */}
            </motion.div>
          );
        })}
    </div>
  );
};

export default Gallery;
