import {useState} from "react";
import Title from "./components/Title";

function App() {
    const [isOpened, setOpened] = useState(false);
    const handleClick = () => {
        setOpened(prevValue => !prevValue);
    };
    if (isOpened) {
        return (
            <>
                <Title name="Products" type="normal"/>
                <button onClick={handleClick}>Close title</button>
            </>
        );
    } else {
        return <button onClick={handleClick}>Open Title</button>;
    }

}

export default App;