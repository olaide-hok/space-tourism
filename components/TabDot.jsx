export default function TabDot({tab, index, isSelected, onClick, refEl}) {
    return (
        <button
            role="tab"
            aria-selected={isSelected}
            aria-controls={tab.id}
            data-image={tab.imageId}
            tabIndex={isSelected ? 0 : -1}
            onClick={onClick}
            ref={refEl}>
            <span className="sr-only"> {tab.name}</span>
        </button>
    );
}
