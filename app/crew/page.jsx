'use client';

import TabImage from '@/components/TabImage';
import TabListDot from '@/components/TabListDot';
import TabPanelDot from '@/components/TabPanelDot';
import {useEffect, useRef, useState} from 'react';

const tabData = [
    {
        id: 'commander-tab',
        name: 'Douglas Hurley',
        images: {
            png: './assets/crew/image-douglas-hurley.png',
            webp: './assets/crew/image-douglas-hurley.webp',
        },
        role: 'Commander',
        bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
    {
        id: 'mission-tab',
        name: 'Mark Shuttleworth',
        images: {
            png: './assets/crew/image-mark-shuttleworth.png',
            webp: './assets/crew/image-mark-shuttleworth.webp',
        },
        role: 'Mission Specialist',
        bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
    {
        id: 'pilot-tab',
        name: 'Victor Glover',
        images: {
            png: './assets/crew/image-victor-glover.png',
            webp: './assets/crew/image-victor-glover.webp',
        },
        role: 'Pilot',
        bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
        id: 'crew-tab',
        name: 'Anousheh Ansari',
        images: {
            png: '/assets/crew/image-anousheh-ansari.png',
            webp: '/assets/crew/image-anousheh-ansari.webp',
        },
        role: 'Flight Engineer',
        bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    },
];

export default function CrewPage() {
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
        <main id="main" className="grid-container grid-container--crew flow">
            <h1 className="numbered-title">
                <span aria-hidden="true">02</span> Meet your crew
            </h1>

            {tabData.map((tab, index) => (
                <TabPanelDot
                    key={tab.id}
                    tab={tab}
                    isVisible={index === selectedTab}
                />
            ))}

            <TabListDot
                tabs={tabData}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                tabListRef={tabListRef}
                tabsRef={tabsRef}
            />

            {tabData.map((tab, index) => (
                <TabImage
                    key={tab.imageId}
                    tab={tab}
                    isVisible={index === selectedTab}
                />
            ))}
        </main>
    );
}
