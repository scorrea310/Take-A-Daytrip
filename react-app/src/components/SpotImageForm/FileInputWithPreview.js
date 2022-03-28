import { useRef, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import './FileInputWithPreview.css';
import ButtonWithIcon from '../ButtonWithIcon';


const FileInputWithPreview = ({
    index,
    src,
    onChange,
    onClick,
    error = null,
    avatar
}) => {

    const hiddenInput = useRef(null);
    const handleClick = (e) => {
        hiddenInput.current.click();
    };

    const gridBlockStyle = {
        backgroundImage: `url(${src})`,
    };

    return (
        <div
            className={!avatar ? `grid-block grid-block-${index}` : "grid-circle"}
            style={src && gridBlockStyle}
        >
            {!src && (
                <div className="icon-container" onClick={handleClick}>
                    <div className="icon file-upload-icon">
                        <FaCamera />
                    </div>
                    <p className="form-label">{!avatar ? "Add a photo" : "Add a profile image"}</p>
                </div>
            )}
            {/* {isVisible && ( */}
            <div className="grid-block-icons">
                <ButtonWithIcon
                    className={'file-input-btn' + (error ? 'error-field' : '')}
                    size="small"
                    action="delete"
                    shape="square"
                    avatar={avatar ? true : false}
                    onClick={(e) => onClick(e, +index)}
                />
                {error && <p className="validation-error">{error}</p>}
            </div>
            {/* )} */}
            <input
                type="file"
                accept=".png,.jpg,.jpeg,.gif"
                onChange={onChange}
                className="file-input hidden-btn"
                ref={hiddenInput}
            />
            {error && <p className="validation-error">{error}</p>}
        </div>
    );
};

export default FileInputWithPreview;
