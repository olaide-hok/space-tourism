export default function TabPanel({tab, isVisible}) {
    return (
        <article
            hidden={!isVisible}
            className="destination-info flow"
            id={tab.id}
            tabindex="0"
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
