import { useEffect, useState } from "react";
import { AuthorsList } from "./components/Authors_List";
import { AddAuthor } from "./components/Add_Author";
import "./style.css";

const API_URL = "http://localhost:8000";
export default function App() {
  const [authors, setAuthors] = useState([]);

  const onDeleteAuthorClickHandler = (authorId) => {
    fetch(`${API_URL}/authors/${authorId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        setAuthors((binAuthor) =>
          binAuthor.filter((author) => author.id !== authorId)
        );
      }
    });
  };

  const onAddAuthorSubmitHandler = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const surname = event.target.surname.value;

    fetch(`${API_URL}/authors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setAuthors((binAuthor) => [...binAuthor, data]);
        }
      });
  };

  useEffect(() => {
    fetch(`${API_URL}/authors`)
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);
  return (
    <>
      <h1>Author Listing App</h1>
      <AddAuthor onAdd={onAddAuthorSubmitHandler} />
      
      <AuthorsList authors={authors} onDelete={onDeleteAuthorClickHandler} />
    </>
  );
}
