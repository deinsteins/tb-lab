import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Dropzone from "react-dropzone";
import { uploadFile } from "../functions/FileUploadService";
import Button from "components/button";

interface Props {
  data: { 
    prediction: string;
    probability: string;
  }
  setData: Dispatch<SetStateAction<{ prediction: string; probability: string; }>>
}



const UploadFiles:React.FC<Props> = ({ data, setData }) => {
    const [selectedFiles, setSelectedFiles]: any = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");

    const onDrop = (files: any) => {
        if (files!.length > 0) {
          setSelectedFiles(files);
        }
      };

      const upload = () => {
        let currentFile = selectedFiles![0];
    
        setProgress(0);
        setCurrentFile(currentFile);
    
        uploadFile(currentFile, (event: { loaded: number; total: number; }) => {
          setProgress(Math.round((100 * event.loaded) / event.total));
        })
          .then((response) => {
            setMessage(response.data.message);
            setData({prediction: "pending", probability: "pending"});
            setTimeout(() => {
              setData(response.data)
            }, 1000);
          })
          .catch(() => {
            setProgress(0);
            setMessage("Gagal mengupload file!");
            setCurrentFile(undefined);
          });
    
        setSelectedFiles(undefined);
      };

      // useEffect(() => {
      //   getFiles().then((response) => {
      //     setFileInfos(response.data);
      //   });
      // }, []);
    
    return (
        <div> 
            <Dropzone onDrop={onDrop} multiple={false}>
                {({ getRootProps, getInputProps }) => (
                <section>
                    <div style={{padding: 30, fontWeight: "bold", border: 3, borderStyle: "dashed", marginBottom: 20}} {...getRootProps({ className: "text-center p-[30px] border-dashed border-[3px] border-white text-[#bdbdbd] cursor-pointer mb-5" })}>
                    <input {...getInputProps()} />
                    {selectedFiles && selectedFiles[0].name ? (
                        <div className="font-bold text-black">
                        {selectedFiles && selectedFiles[0].name}
                        </div>
                    ) : (
                        "Drop file disini, atau klik untuk memilih file"
                    )}
                    </div>
                    <aside className="text-center">
                    <Button OnClick={upload} btnDisable={!selectedFiles} title="Predict Image" background="red" color="white"/>
                    </aside>
                </section>
                )}
            </Dropzone>
            <div style={{color: "red", textAlign: "center", marginTop: 20, fontWeight:"bold"}}>
                {message}
            </div>
          </div>
    );
};

export default UploadFiles;
