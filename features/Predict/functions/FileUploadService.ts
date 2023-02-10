import http from "utils/functions/http-common";

export const uploadFile = (file: string | Blob, onUploadProgress: any) => {
  let formData = new FormData();

  formData.append("imagefile", file);

  return http.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};
