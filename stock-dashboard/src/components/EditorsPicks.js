import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function EditorsPicks() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const url = 'https://api.marketaux.com/v1/news/all?countries=us&filter_entities=true&limit=10&published_after=2024-05-12T11:48&api_token=HZNJghNu6AKVmaKCFNyXRL4P1y0siGswt7Twm92G';
            const response = await fetch(url, { headers: { 'Content-Type': 'application/json' } });
            const data = await response.json();
            const newsArticles = data.data.map(article => ({
                title: article.title,
                description: article.description || 'No description available',
                url: article.url
            }));
            setArticles(newsArticles);
        };

        fetchNews();
    }, []);

    return (
        <Box sx={{ color: 'white', mb: 2, mt: 2 }}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 'bold' }}>
                Financial News Highlights
            </Typography>
            {articles.map((article, index) => (
                <Card sx={{
                    mb: 1,
                    backgroundColor: '#424242',
                    borderRadius: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }} key={index}>
                    <CardActionArea component="a" href={article.url} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                                {article.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {article.description}
                            </Typography>
                        </CardContent>
                        <ArrowForwardIosIcon sx={{ color: 'gray', mr: 1 }} />
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}

export default EditorsPicks;
