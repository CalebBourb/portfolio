import React from "react";
import "../styles/global.css";

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 font-roboto">Welcome to my portfolio site!</h1>
            <p className="justify-end">
                This is a simple portfolio site created using React. Feel free to
                explore the site and learn more about me.
            </p>
        </div>
        </div>
    );
}
export default Home;