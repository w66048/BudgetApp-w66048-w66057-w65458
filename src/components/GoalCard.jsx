import React from 'react';

export const GoalCard = ({ id, name, description, amount, goal, onDonateClick, onEditClick }) => {
    const progress = Math.min((amount / goal) * 100, 100);

    return (
        <div className="border rounded-lg shadow-lg p-4 bg-blue-100">
            <div className="flex justify-between items-center">
                <h3 className="text-blue-600 text-2xl mb-4">{name}</h3>
                <div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => onDonateClick(id)}
                    >
                        Wpłać
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        onClick={() => onEditClick(id)}
                    >
                        Edytuj
                    </button>
                </div>
            </div>
            <p className="text-black mt-2">{description}</p>
            <div className="mt-4">
                <div className="w-full bg-gray-600 rounded-full h-4">
                    <div
                        className="bg-blue-500 h-4 rounded-full overflow-hidden"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="text-right mt-1 text-sm text-black">
                    {amount} / {goal} PLN
                </div>
            </div>
        </div>
    );
};
