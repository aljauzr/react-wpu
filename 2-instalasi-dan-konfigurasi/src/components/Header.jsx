export default function Header({author}) {
    return <h1 className="heading">Belajar React bareng {author ? author: "Pa Dhika"}</h1>;
}