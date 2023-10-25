import { useState } from "preact/hooks";

type GreetingProps = {
    messages: string[];
};
const Greeting = ({ messages = [] }: GreetingProps) => {
    const [message, setMessage] = useState("");

    const getRandomMessage = () => {
        const selectedMessage =
            messages[Math.floor(Math.random() * messages.length)];
        setMessage(selectedMessage);
    };

    return (
        <div>
            <h3>{message}! Thank you for visiting!</h3>
            <button onClick={getRandomMessage}>New Greeting</button>
        </div>
    );
};

export default Greeting;
