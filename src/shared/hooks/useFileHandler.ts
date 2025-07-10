import { useState } from 'react';

const useFileHandler = ({ accept = '*', multiple = false } = {}) => {
  const [files, setFiles] = useState([]);

  const onFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const openFileDialog = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.multiple = multiple;

    input.addEventListener('change', onFileChange);
    input.click();

    input.addEventListener('click', () => {
      input.removeEventListener('change', onFileChange);
    });
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const clearFiles = () => {
    setFiles([]);
  };

  return {
    files,
    setFiles,
    openFileDialog,
    removeFile,
    clearFiles,
  };
};

export default useFileHandler;
