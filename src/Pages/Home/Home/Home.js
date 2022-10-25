import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>Dragon News Home</h2>
            {
                allNews.map(news => <NewsSummaryCard
                    keys={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;