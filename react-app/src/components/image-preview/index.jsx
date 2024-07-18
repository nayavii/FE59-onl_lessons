import { useDispatch, useSelector } from "react-redux";

import { Button } from "../button";
import "./index.scss";
import { getBlackTheme, getImage } from "../../store/selectors";
import { DELETE_IMAGE_ACTION } from "../../store/actions";


export const ImagePreview = () => {
  const isBlackTheme = useSelector(getBlackTheme);
  const dispatch = useDispatch();
  const image = useSelector(getImage);
  // const images = useSelector(store => store.images);


  const handleImageClose = () => {
    dispatch(DELETE_IMAGE_ACTION);
  };

  // useEffect(() => {
  //   const imagesToAdd = posts.map(({ image }) => image);
  //   dispatch(addImagesAction(imagesToAdd));
  // }, []);


  return (
    <div className={`image-preview ${isBlackTheme ? "image-preview_black" : ""}`}>
      <div className="container">
        <div className="image-preview__wrapper">
          <div  className="image-preview__img">
            <img src={image} alt="Image" />
          </div>
          
          <div className="image-preview__actions">
            <Button
              title={"Cancel"}
              onClick={handleImageClose}
              isOutlineButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
