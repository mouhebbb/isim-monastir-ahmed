import React, { useState, useEffect } from "react";

const EnseignantList = () => {
  const [enseignants, setEnseignants] = useState([]);

  useEffect(() => {
    const fetchEnseignants = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/enseignants/all"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch enseignants");
        }
        const data = await response.json();
        setEnseignants(data);
      } catch (error) {
        console.error("Error fetching enseignants:", error.message);
      }
    };

    fetchEnseignants();
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h2>Liste des Enseignants</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Nom
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Prénom
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Age
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Email
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Matières Enseignées
            </th>
          </tr>
        </thead>
        <tbody>
          {enseignants.map((enseignant, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {enseignant.nom}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {enseignant.prenom}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {enseignant.age}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {enseignant.email}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <ul>
                  {enseignant.matiereEnseignee.map((matiere, matiereIndex) => (
                    <li key={matiereIndex}>{matiere}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnseignantList;
