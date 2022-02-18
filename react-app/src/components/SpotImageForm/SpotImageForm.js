import { useState } from 'react';
import FileInputWithPreview from './FileInputWithPreview';
import "./SpotImageForm.css"


const SpotImageForm = ({ images, setImages }) => {
    const [errors, setErrors] = useState([]);
    const [_imageLoading, setImageLoading] = useState(false);

    const toObjectURL = (file) => URL.createObjectURL(file);
    const updateImages = (e) => setImages([...images, e.target.files[0]]);
    const handleDelete = (e, i) => {
        e.preventDefault();
        e.stopPropagation();
        const filtered = images.filter((_item, index) => i !== index);
        setImages(filtered);
    };

    return (
        <div className="photosContainer">

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
