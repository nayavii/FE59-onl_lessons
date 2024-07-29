import "./index.scss";
import { useNavigate } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { Button } from "../../components/button";
import { useState } from "react";
import { createPost } from "../../api/posts";
import Validator from "fastest-validator";

const validationSchema = {
  title: {
    type: "string",
    min: 1,
    messages: {
      stringMin: "Custom message - too short",
    },
  },
  lesson_num: { type: "string", min: 1 },
  description: { type: "string", min: 1 },
  text: { type: "string", min: 1 },
};

const checkValidationData = (data) => {
  const validator = new Validator();
  const check = validator.compile(validationSchema);

  return check(data);
};

export const CreatePost = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});

  const handleClick = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, lesson_num, description, text } = event.currentTarget;

    const result = checkValidationData({
      title: title.value,
      lesson_num: lesson_num.value,
      description: description.value,
      text: text.value,
    });

    if (result === true) {
      const data = new FormData(event.currentTarget);

      data.append("image", images[0]?.file);

      createPost(data).then((response) => {
        if (response.id) {
          alert("Ура, мы сохранили наш пост!!!");
        }
      });
    } else {
      setErrors(
        result.reduce(
          (result, { field, message }) => ({
            ...result,
            [field]: message,
          }),
          {}
        )
      );
    }
  };

  const handleChangeImage = (imageList) => {
    setImages(imageList);
  };

  const makeErrorText = (field) => {
    return errors[field] ? (
      <span className="create-post__error">{errors[field]}</span>
    ) : null;
  };

  return (
    <div className="create-post">
      <div className="container">
        <Button
          className={"create-post__btn"}
          title={"Go Home"}
          isOutlineButton={true}
          onClick={handleClick}
        />
        <h1 className="create-post__title title">Add Post</h1>
        <form className="create-post__form" onSubmit={handleSubmit}>
          <input
            type="text"
            label="Title"
            placeholder="Title"
            name="title"
            className="create-post__input input"
          />
          {makeErrorText("title")}
          <div className="create-post__input create-post__uploading">
            <div className="create-post__input-group">
              <input
                type="text"
                label="Lesson number"
                placeholder="Lesson number"
                name="lesson_num"
                className="create-post__input input"
              />
              {makeErrorText("lesson_num")}
            </div>
            <ImageUploading value={images} onChange={handleChangeImage}>
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <Button
                    className={"create-post__btn"}
                    title={"Upload new"}
                    isOutlineButton={false}
                    onClick={onImageUpload}
                    {...dragProps}
                  />
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image.dataURL} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <Button
                          className={"create-post__btn create-post__btn-text"}
                          title={"Update"}
                          isOutlineButton={true}
                          onClick={() => onImageUpdate(index)}
                        />

                        <Button
                          className={"create-post__btn create-post__btn-text"}
                          title={"Remove"}
                          isOutlineButton={true}
                          onClick={() => onImageRemove(index)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
          <div className="create-post__input-group">
            <textarea
              label="Description"
              placeholder="Description"
              name="description"
              className="create-post__input input"
            />
            {makeErrorText("description")}
          </div>
          <div className="create-post__input-group ">
            <textarea
              label="Text"
              placeholder="Text"
              name="text"
              className="create-post__input input"
            />
            {makeErrorText("text")}
          </div>
          <div className="create-post__actions">
            <input
              type="button"
              value="Delete post"
              className="create-post__btn create-post__delete"
            />
            <div className="create-post__actions-right">
              <input
                type="reset"
                value="Cancel"
                className="create-post__btn create-post__cancel"
              />
              <input
                type="submit"
                value="Add post"
                className="create-post__btn create-post__save"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
