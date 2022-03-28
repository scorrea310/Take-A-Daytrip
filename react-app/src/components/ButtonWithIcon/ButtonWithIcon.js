import { GrNext, GrPrevious, GrEdit } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import './ButtonWithIcon.css';

const buttonReducer = (action) => {
    switch (action) {
        case 'next':
            return <GrNext />;
        case 'previous':
            return <GrPrevious />;
        case 'edit':
            return <GrEdit />;
        case 'delete':
            return <AiFillDelete />;
        default:
            return null;
    }
};

const ButtonWithIcon = ({ className, size, action, shape, onClick = null, avatar }) => {
    const icon = buttonReducer(action);

    return (
        <button
            className={!avatar ? `${shape}-btn ${shape}-btn-${size} ${className}` : "square-btn-small-avatar"}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default ButtonWithIcon;
