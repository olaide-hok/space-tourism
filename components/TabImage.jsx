export default function TabImage({tab, path, isVisible}) {
    return (
        <picture id={tab.imageId} hidden={!isVisible}>
            <source srcSet={tab.images.webp} type="image/webp" />
            <img
                src={tab.images.png}
                alt={`Illustration for ${tab.label}`}
                className="w-full max-w-md"
            />
        </picture>
    );
}
