import Responsive from "components/layout/Responsive";
import Wrapper from "components/layout/Wrapper";
import Loader from "components/loader";
import PredictionResult from "features/Predict/PredictionResult";
import UploadFiles from "features/Predict/UploadFile";
import Head from "next/head";
import { useState } from "react";
import { When } from "react-if";

const initialData = {
    prediction: "",
    probability: "",
  }
  

const Predict = () => {
    const [data, setData] = useState(initialData);
    return (
        <>
            <Head>
                <title>TB Lab - Predict</title>
            </Head>
            <Wrapper className='text-white' footer>
                <Responsive className='flex flex-col gap-4 font-raleway'>
                    <When condition={data.prediction.length <= 0}>
                        <h1 className="text-center font-bold text-3xl cursor-pointer">Silahkan Upload Gambar atau file Citra X-ray disini</h1>
                        <div className="w-1/2 mx-auto bg-slate-400 p-12 rounded text-black">
                            <UploadFiles data={data} setData={setData} />
                        </div>
                    </When>         
                    <When condition={data.prediction.length > 0}>
                        <h1 className="text-center font-bold text-3xl cursor-pointer">Hasil Prediksi</h1>
                        <When condition={data.prediction === "pending"}>
                            <Loader />
                        </When>
                        <When condition={data.prediction !== "pending"}>
                            <PredictionResult prediction={data.prediction} probability={data.probability} />
                        </When>
                        <div className="w-1/2 mx-auto bg-slate-400 p-12 rounded text-black">
                            <UploadFiles data={data} setData={setData} />
                        </div>
                    </When>
                </Responsive>
            </Wrapper>
        </>
    )
}

export default Predict;