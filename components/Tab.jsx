export default function Tab({
    tab,
    text,
    dot,
    number,
    index,
    isSelected,
    onClick,
    refEl,
}) {
    if (text) {
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

    if (dot) {
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

    if (number) {
        return (
            <button
                role="tab"
                aria-selected={isSelected}
                aria-controls={tab.id}
                data-image={tab.imageId}
                tabIndex={isSelected ? 0 : -1}
                onClick={onClick}
                ref={refEl}
                className="ff-serif text-white">
                {index + 1}
            </button>
        );
    }
}
