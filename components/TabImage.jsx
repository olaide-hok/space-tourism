export default function TabImage({tab, tech, isVisible}) {
    if (!tech) {
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

    if (tech) {
        return (
            <picture id={tab.imageId} hidden={!isVisible}>
                <source
                    srcSet={tab.images.portrait}
                    media="(min-width: 720px)"
                    type="image/jpg"
                />
                <source
                    srcSet={tab.images.landscape}
                    media="(min-width: 560px)"
                    type="image/jpg"
                />

                <img
                    src={tab.images.landscape}
                    alt={`Illustration for ${tab.name}`}
                    className="w-full max-w-md"
                />
            </picture>
        );
    }
}
