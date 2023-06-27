import React from 'react'
import { useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/StatsContainer'
import { FaBug, FaCalendarCheck, FaSuitcase } from 'react-icons/fa';
import { StatItem } from './StatItem';

export const StatsContainer = () => {
    const { stats } = useSelector((store) => store.allJobs);
    const defaultStats = [
        {
            title: 'Pending Applications',
            count: stats.pending || 0,
            icon: <FaSuitcase />,
            color: '#e9b949',
            bcg: '#fcefc7'
        },
        {
            title: 'interviews scheduled',
            count: stats.interview || 0,
            icon: <FaCalendarCheck />,
            color: '#647acb',
            bcg: '#e0e8f9'
        },
        {
            title: 'Jobs declined',
            count: stats.declined || 0,
            icon: <FaBug />,
            color: '#d66a6a',
            bcg: '#ffeeee'
        }
    ]
    return (
        <Wrapper>
            {defaultStats.map((value, index) => <StatItem key={index} {...value} /> )}
        </Wrapper>
    )
}
