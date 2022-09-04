import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Upload = ({ setOpen }) => {
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);

  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);

  const [input, setInput] = useState("");
  const [tags, setTags] = useState("");

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(","));
  };

  const uploadFiles = (file, urlType) => {
    const firebaseStorage = storage;
    const fileName = new Date().getTime + file.name;
    const storageRef = ref(firebaseStorage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imgUrl" ? setImgPerc(progress) : setVideoPerc(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInput((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFiles(video, 'videoUrl');
  }, [video]);
  useEffect(() => {
    img && uploadFiles(img, 'imgUrl');
  }, [img]);

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload the video</Title>

        <Label>Video: </Label>
        {videoPerc > 0 ? (
          "Upload is " + Math.round(videoPerc) + "% done"
        ) : (
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}
        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <Desc rows={10} onChange={handleChange} name="description" />
        <Input
          type="text"
          placeholder="Tags seperated by comas ( , ) "
          onChange={handleTags}
        />
        <Label>Image:</Label>
        {imgPerc > 0 ? (
          "Upload is " + Math.round(imgPerc) + "% done"
        ) : (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
          />
        )}
        <Button>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  color: ${({ theme }) => theme.text};
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.menuBg};

  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 20px;
  position: relative;
`;
const Close = styled.h3`
  cursor: pointer;
  font-size: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
const Title = styled.h1`
  font-size: 30px;
`;

const Label = styled.p``;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Button = styled.div`
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.soft};
  cursor: pointer;
  text-align: center;
  font-weight: bold;
`;
