export default function TabPanel({tab, text, crew, tech, isVisible}) {
    if (text) {
        return (
            <article
                hidden={!isVisible}
                className="destination-info flow"
                id={tab.id}
                tabIndex="0"
                role="tabpanel">
                <h2 className="fs-800 uppercase ff-serif">Moon</h2>

                <p>{tab.description}</p>

                <div className="destination-meta flex">
                    <div>
                        <h3 className="text-accent fs-200 uppercase">
                            Avg. distance
                        </h3>
                        <p className="ff-serif uppercase">{tab.distance}</p>
                    </div>
                    <div>
                        <h3 className="text-accent fs-200 uppercase">
                            Est. travel time
                        </h3>
                        <p className="ff-serif uppercase">{tab.travel}</p>
                    </div>
                </div>
            </article>
        );
    }

    if (crew) {
        return (
            <article
                hidden={!isVisible}
                className="crew-details flow"
                id={tab.id}
                tabIndex="0"
                role="tabpanel">
                <header className="flow flow--space-small">
                    <h2 className="fs-600 ff-serif uppercase">{tab.role}</h2>
                    <p className="fs-700 uppercase ff-serif">{tab.name}</p>
                </header>
                <p>{tab.bio}</p>
            </article>
        );
    }

    if (tech) {
        return (
            <article
                hidden={!isVisible}
                className="technology-details flow"
                id={tab.id}
                tabIndex="0"
                role="tabpanel">
                <header className="flow flow--space-small">
                    <h2 className="fs-600 ff-serif uppercase">
                        The Terminology...
                    </h2>
                    <p className="fs-700 uppercase ff-serif">{tab.name}</p>
                </header>
                <p className="text-accent">{tab.description}</p>
            </article>
        );
    }
}
