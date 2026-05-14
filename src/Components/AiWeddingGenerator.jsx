import { useState } from "react";
import axios from "axios";

function AiWeddingGenerator() {

  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {

    if (!prompt) {
      alert("Please enter wedding idea");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/generate-image",
        {
          prompt,
        }
      );

      setImage(res.data.image);

    } catch (error) {

      console.log(error);

      alert("Image generation failed");

    } finally {

      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>
        AI Wedding Decoration Generator
      </h1>

      <textarea
        placeholder="Describe your dream wedding decoration..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={styles.textarea}
      />

      <button
        onClick={generateImage}
        style={styles.button}
      >
        {loading ? "Generating..." : "Generate Design"}
      </button>

      {image && (
        <div style={styles.imageContainer}>

          <img
            src={image}
            alt="Wedding Design"
            style={styles.image}
          />

        </div>
      )}

    </div>
  );
}

const styles = {

  container: {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
  },

  heading: {
    fontSize: "40px",
    marginBottom: "20px",
  },

  textarea: {
    width: "100%",
    height: "150px",
    padding: "15px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid gray",
  },

  button: {
    marginTop: "20px",
    padding: "15px 30px",
    backgroundColor: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },

  imageContainer: {
    marginTop: "40px",
  },

  image: {
    width: "100%",
    borderRadius: "20px",
  },
};

export default AiWeddingGenerator;