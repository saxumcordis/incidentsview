import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import styles from "./DropZone.module.scss";
import { useData } from "../../service/contexts";

export const DropZone = () => {
  const { setLoadedData } = useData();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader();
      reader.readAsText(acceptedFiles[0]);
      reader.addEventListener("load", ({ target }) => {
        let data = JSON.parse(target!.result as string);
        try {
          setLoadedData!(data);
        } catch (e) {
          window.alert(e);
        } finally {
        }
      });
    },
    [setLoadedData]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className={styles.container} {...getRootProps()}>
      <input {...getInputProps()} />
      Перетащи файл сюда или нажми на квадрат, чтобы выбрать его
    </div>
  );
};
