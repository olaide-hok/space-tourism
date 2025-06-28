import TabDot from './TabDot';

export default function TabListDot({
    tabs,
    selectedTab,
    setSelectedTab,
    tabListRef,
    tabsRef,
}) {
    return (
        <div
            role="tablist"
            aria-label="crew member list"
            ref={tabListRef}
            class="dot-indicators flex">
            {tabs.map((tab, index) => (
                <TabDot
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
