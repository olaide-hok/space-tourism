export default function TabPanelDot({tab, isVisible}) {
    return (
        <article
            hidden={!isVisible}
            className="crew-details flow"
            id={tab.id}
            tabindex="0"
            role="tabpanel">
            <header className="flow flow--space-small">
                <h2 className="fs-600 ff-serif uppercase">{tab.role}</h2>
                <p className="fs-700 uppercase ff-serif">{tab.name}</p>
            </header>
            <p>{tab.bio}</p>
        </article>
    );
}
