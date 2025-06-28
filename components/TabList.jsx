import Tab from './Tab';

export default function TabList({
    tabs,
    selectedTab,
    setSelectedTab,
    tabListRef,
    tabsRef,
}) {
    return (
        <div
            role="tablist"
            aria-label="destination list"
            ref={tabListRef}
            className="tab-list underline-indicators flex">
            {tabs.map((tab, index) => (
                <Tab
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
