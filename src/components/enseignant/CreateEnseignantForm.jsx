import React from "react";

const CreateEnseignantForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEnseignant = { nom, prenom, age: parseInt(age), email };

    try {
      const response = await fetch(
        "http://localhost:8080/api/enseignants/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEnseignant),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add enseignant");
      }

      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error("Error adding enseignant:", error.message);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "0 auto",
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
        style={{
          marginBottom: "10px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <input
        type="text"
        placeholder="Prenom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        required
        style={{
          marginBottom: "10px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        style={{
          marginBottom: "10px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          marginBottom: "10px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Ajouter Enseignant
      </button>
    </form>
  );
};

export default CreateEnseignantForm;
