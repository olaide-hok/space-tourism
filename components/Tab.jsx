export default function Tab({tab, index, isSelected, onClick, refEl}) {
    return (
        <button
            role="tab"
            aria-selected={isSelected}
            aria-controls={tab.id}
            data-image={tab.imageId}
            tabIndex={isSelected ? 0 : -1}
            onClick={onClick}
            ref={refEl}
            className="uppercase ff-sans-cond text-accent letter-spacing-2">
            {tab.name}
        </button>
    );
}
