'use client';

import TabImage from '@/components/TabImage';
import TabList from '@/components/TabList';
import TabPanel from '@/components/TabPanel';
import {useEffect, useRef, useState} from 'react';

const tabData = [
    {
        id: 'moon-tab',
        name: 'Moon',
        images: {
            png: '/assets/destination/image-moon.png',
            webp: '/assets/destination/image-moon.webp',
        },
        description:
            'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel: '3 days',
    },
    {
        id: 'mars-tab',
        name: 'Mars',
        images: {
            png: '/assets/destination/image-mars.png',
            webp: '/assets/destination/image-mars.webp',
        },
        description:
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travel: '9 months',
    },
    {
        id: 'europa-tab',
        name: 'Europa',
        images: {
            png: './assets/destination/image-europa.png',
            webp: './assets/destination/image-europa.webp',
        },
        description:
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        travel: '3 years',
    },
    {
        id: 'titan-tab',
        name: 'Titan',
        images: {
            png: './assets/destination/image-titan.png',
            webp: './assets/destination/image-titan.webp',
        },
        description:
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        travel: '7 years',
    },
];

export default function Destination() {
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
        <main
            id="main"
            className="grid-container grid-container--destination flow">
            <h1 className="numbered-title">
                <span aria-hidden="true">01</span> Pick your destination
            </h1>

            {tabData.map((tab, index) => (
                <TabImage
                    key={tab.id}
                    tab={tab}
                    isVisible={index === selectedTab}
                />
            ))}

            <TabList
                text
                tabs={tabData}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                tabListRef={tabListRef}
                tabsRef={tabsRef}
            />

            {tabData.map((tab, index) => (
                <TabPanel
                    text
                    key={tab.id}
                    tab={tab}
                    isVisible={index === selectedTab}
                />
            ))}
        </main>
    );
}
