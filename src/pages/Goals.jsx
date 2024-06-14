import { useState } from "react";
import {AddGoal} from "../components/AddGoal.jsx";
import { Header } from "../components/Header.jsx";

export const Goals = () => {
    const [showPopup, setShowPopup] = useState(false)
    const handleOnClose = () => setShowPopup(false)
    
    return (
        <>
        <Header/>
        <div className="flex-grow mt-16">
            <div className="flex justify-between items-center p-4 w-full h-full border-b-2 border-gray">
                <h2 className="text-left text-xl font-bold">Twoje Cele</h2>
                <button onClick={() => setShowPopup(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Dodaj Cel</button>
            </div>
        </div>
        <AddGoal onClose={handleOnClose} visible={showPopup}/>
        </>
    )
}