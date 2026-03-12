'use client';

interface MenuItemProps {
    label: string; //remove "?" later
    onClick: () => void; // remove "?" later
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
    return (
        <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold" onClick={onClick}>
            {label}
        </div>
    );
};

export default MenuItem;