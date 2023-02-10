import React from "react";

interface Props {
    prediction: string;
    probability: string;
}

const PredictionResult:React.FC<Props> = ({ prediction, probability }) => {
    return (
            <div className="flex flex-col text-center mb-4 bg-slate-700 font-bold w-1/2 mx-auto py-4 px-4 rounded">
                <span className="text-lg font-extrabold">{prediction}</span>
                <span>Tingkat Kemungkinan :</span>
                <div style={{background: "grey", borderRadius: "20px", marginTop: "14px"}}>
                    <div style={{background: "green", width: `${probability}%`, borderRadius: "20px"}}>
                        <span>{probability}%</span>
                    </div>
                </div>
            </div>
    )
}

export default PredictionResult;