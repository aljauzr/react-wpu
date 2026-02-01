import { useState } from 'react'

function Header({author}) {
    return <h1 className="heading">Belajar React bareng {author ? author: "Pa Dhika"}</h1>;
}

function App() {
  const students = ["Dhika", "Joji", "Erik"];
  const [likes, setLikes] = useState(0);
  
  function handleClick() {
      setLikes(likes + 1);
  }

  return (
      <div>
          <Header author="WPU" />
          <ul>
              {students.map((student) => (
                  <li key="student">{student}</li>
              ))}
          </ul>

          <button onClick={handleClick}>Likes ({likes})</button>
      </div>
  );
}

export default App
