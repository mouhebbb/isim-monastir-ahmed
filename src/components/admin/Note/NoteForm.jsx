import React, { useState } from "react";
import axios from "axios";

const NoteForm = () => {
  const [name, setName] = useState("");
  const [doc, setDoc] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("doc", doc);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/notes/save",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Note created:", response.data);
      setName("");
      setDoc(null);
      alert("Added successfully");
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
        <h2>Create Note</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div>
            <input
              type="file"
              onChange={(e) => setDoc(e.target.files[0])}
              style={{ width: "100%" }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Create Note
          </button>
        </form>
      </div>
    </>
  );
};

export default NoteForm;
