export default function UserPanel() {
    return<div>
        <h2>Witaj, {authenticatedUserName}</h2>
        <button onClick={handleClick}>Wyloguj</button>
    </div>
}
