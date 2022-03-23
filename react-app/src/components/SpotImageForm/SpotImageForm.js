import { useState } from 'react';
import FileInputWithPreview from './FileInputWithPreview';
import "./SpotImageForm.css"


const SpotImageForm = ({ images, setImages, noImagesError, firstSlide, secondSlide, thirdSlide }) => {
    const [errors, setErrors] = useState([]);
    const [_imageLoading, setImageLoading] = useState(false);

    const toObjectURL = (file) => {
        if (file === null || file === undefined) return;
        return URL.createObjectURL(file)
    };
    const updateImages = (e) => {

        if (e.target.files[0] === undefined || e.target.files[0] === null) return

        setImages([...images, e.target.files[0]])

    };
    const handleDelete = (e, i) => {
        e.preventDefault();
        e.stopPropagation();
        const filtered = images.filter((_item, index) => i !== index);

        setImages(filtered);
    };

    return (
        <div className="photosContainer">
            <div className="progressBarSlide2">
                <div className={firstSlide ? "blackSlide" : "graySlide"}></div>
                <div className={secondSlide ? "blackSlide" : "graySlide"}></div>
                <div className={thirdSlide ? "blackSlide" : "graySlide"}> </div>
            </div>
            <div className='imageErrorsDiv'>
                {noImagesError.map((error, ind) => (
                    <div className='loginErrors' key={ind}>{error}</div>
                ))}
            </div>
            <h2 className="page-heading">Add Photos</h2>
            <div className="product-image-form">
                <div className="form-row">
                    <div className="image-preview-grid">
                        <FileInputWithPreview
                            index={0}
                            src={images.length > 0 ? toObjectURL(images[0]) : null}
                            onChange={updateImages}
                            onClick={handleDelete}
                        />
                        <FileInputWithPreview
                            index={1}
                            src={images.length > 1 ? toObjectURL(images[1]) : null}
                            onChange={updateImages}
                            onClick={handleDelete}
                        />
                    </div>
                </div>
                <div className="image-preview-grid">
                    <FileInputWithPreview
                        index={2}
                        src={images.length > 2 ? toObjectURL(images[2]) : null}
                        onChange={updateImages}
                        onClick={handleDelete}
                    />
                    <FileInputWithPreview
                        index={3}
                        src={images.length > 3 ? toObjectURL(images[3]) : null}
                        onChange={updateImages}
                        onClick={handleDelete}
                    />
                </div>
            </div>
            {errors.length > 0 && errors.map((e) => e)}
        </div >
    );
};

export default SpotImageForm;
