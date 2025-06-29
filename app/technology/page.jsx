'use client';

import TabImage from '@/components/TabImage';
import TabList from '@/components/TabList';
import TabPanel from '@/components/TabPanel';
import {useEffect, useRef, useState} from 'react';

const tabData = [
    {
        id: 'launch-tab',
        name: 'Launch vehicle',
        images: {
            portrait: '/assets/technology/image-launch-vehicle-portrait.jpg',
            landscape: '/assets/technology/image-launch-vehicle-landscape.jpg',
        },
        description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
        id: 'spaceport-tab',
        name: 'Spaceport',
        images: {
            portrait: '/assets/technology/image-spaceport-portrait.jpg',
            landscape: '/assets/technology/image-spaceport-landscape.jpg',
        },
        description:
            'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
        id: 'space-capsule-tab',
        name: 'Space capsule',
        images: {
            portrait: '/assets/technology/image-space-capsule-portrait.jpg',
            landscape: '/assets/technology/image-space-capsule-landscape.jpg',
        },
        description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
];

export default function TechnologyPage() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [tabFocus, setTabFocus] = useState(0);
    const tabsRef = useRef([]);
    const tabListRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const LEFT = 37;
            const RIGHT = 39;

            if (e.keyCode !== LEFT && e.keyCode !== RIGHT) return;

            tabsRef.current[tabFocus]?.setAttribute('tabindex', -1);

            let newFocus = tabFocus;

            if (e.keyCode === RIGHT) {
                newFocus = (tabFocus + 1) % tabData.length;
            } else if (e.keyCode === LEFT) {
                newFocus = (tabFocus - 1 + tabData.length) % tabData.length;
            }

            tabsRef.current[newFocus]?.setAttribute('tabindex', 0);
            tabsRef.current[newFocus]?.focus();
            setTabFocus(newFocus);
        };

        const tabListEl = tabListRef.current;
        tabListEl?.addEventListener('keydown', handleKeyDown);

        return () => {
            tabListEl?.removeEventListener('keydown', handleKeyDown);
        };
    }, [tabFocus]);

    return (
        <main id="main" className="technology-container flex">
            <h1 className="numbered-title">
                <span aria-hidden="true">03</span> Space Launch 101
            </h1>
            <div className="info flex">
                <div className="tab-content flex">
                    <TabList
                        number
                        tabs={tabData}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        tabListRef={tabListRef}
                        tabsRef={tabsRef}
                    />

                    {tabData.map((tab, index) => (
                        <TabPanel
                            tech
                            key={tab.id}
                            tab={tab}
                            isVisible={index === selectedTab}
                        />
                    ))}
                </div>
                {tabData.map((tab, index) => (
                    <TabImage
                        key={tab.id}
                        tech
                        tab={tab}
                        isVisible={index === selectedTab}
                    />
                ))}
            </div>
        </main>
    );
}
