import Tab from './Tab';

export default function TabList({
    tabs,
    selectedTab,
    setSelectedTab,
    tabListRef,
    tabsRef,
    number,
    text,
    dot,
}) {
    if (text) {
        return (
            <div
                role="tablist"
                aria-label="destination list"
                ref={tabListRef}
                className="tab-list underline-indicators flex">
                {tabs.map((tab, index) => (
                    <Tab
                        text
                        key={tab.id}
                        tab={tab}
                        index={index}
                        isSelected={selectedTab === index}
                        onClick={() => setSelectedTab(index)}
                        refEl={(el) => (tabsRef.current[index] = el)}
                    />
                ))}
            </div>
        );
    }
    if (dot) {
        return (
            <div
                role="tablist"
                aria-label="crew member list"
                ref={tabListRef}
                class="dot-indicators flex">
                {tabs.map((tab, index) => (
                    <Tab
                        dot
                        key={tab.id}
                        tab={tab}
                        index={index}
                        isSelected={selectedTab === index}
                        onClick={() => setSelectedTab(index)}
                        refEl={(el) => (tabsRef.current[index] = el)}
                    />
                ))}
            </div>
        );
    }
    if (number) {
        return (
            <div
                role="tablist"
                aria-label="technology list"
                ref={tabListRef}
                className="number-indicators flex">
                {tabs.map((tab, index) => (
                    <Tab
                        number
                        key={tab.id}
                        tab={tab}
                        index={index}
                        isSelected={selectedTab === index}
                        onClick={() => setSelectedTab(index)}
                        refEl={(el) => (tabsRef.current[index] = el)}
                    />
                ))}
            </div>
        );
    }
}
