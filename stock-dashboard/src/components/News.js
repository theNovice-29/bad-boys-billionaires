import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CardActionArea, Box, CardMedia, Grid } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const translateText = async (text, targetLang = 'en') => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=YOUR_GOOGLE_API_KEY`; // Update with your API key
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ q: text, target: targetLang }),
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return data.data && data.data.translations ? data.data.translations[0].translatedText : text;
};

function News() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch('https://api.marketaux.com/v1/news/all?countries=us&filter_entities=true&limit=10&published_after=2024-05-12T11:48&api_token=HZNJghNu6AKVmaKCFNyXRL4P1y0siGswt7Twm92G');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            const newsArticles = data && data.data ? await Promise.all(data.data.map(async (item) => ({
                title: await translateText(item.title),
                description: await translateText(item.description),
                url: item.url,
                imageUrl: item.image_url,
            }))) : [];
            setArticles(newsArticles);
            setIsLoading(false);
        };
        fetchNews();
    }, []);

    // Load TradingView Widgets
    useEffect(() => {
        const loadWidget = (containerId, widgetScriptUrl, widgetConfig) => {
            const script = document.createElement('script');
            script.src = widgetScriptUrl;
            script.async = true;
            script.type = "text/javascript";
            script.innerHTML = JSON.stringify(widgetConfig);

            const container = document.getElementById(containerId) || document.createElement('div');
            container.id = containerId;
            document.body.appendChild(container);
            container.appendChild(script);

            return () => { document.body.removeChild(container); };
        };

        loadWidget("ticker-tape-container", "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js", {
            "symbols": [
                { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index" },
                { "proName": "FOREXCOM:NSXUSD", "title": "US 100 Cash CFD" },
                { "proName": "FX_IDC:EURUSD", "title": "EUR to USD" },
                { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
                { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" }
            ],
            "showSymbolLogo": true,
            "isTransparent": true,
            "displayMode": "adaptive",
            "colorTheme": "dark",
            "locale": "en"
        });
        loadWidget("tradingview-top-stories", "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js", {
            "feedMode": "all_symbols",
            "isTransparent": true,
            "displayMode": "regular",
            "width": "100%",
            "height": "450",
            "colorTheme": "dark",
            "locale": "en"
        });

        return () => {
            document.getElementById('ticker-tape-container').innerHTML = '';
            document.getElementById('tradingview-top-stories').innerHTML = '';
        };
    }, []);

    return (
        <Box sx={{ mt: 2, px: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
                    Top 10 Financial News
                </Typography>
                <CircleIcon sx={{ color: 'red', animation: 'pulse 1.5s infinite', marginLeft: '10px' }} />
            </Box>
            {isLoading ? (
                <Typography>Loading news...</Typography>
            ) : (
                <Grid container spacing={3}>
                    {articles.map((article, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{ backgroundColor: 'background.paper', '&:hover': { '& img': { transform: 'scale(1.1)' } } }}>
                                <CardActionArea href={article.url} target="_blank">
                                    <CardMedia
                                        component="img"
                                        image={article.imageUrl || 'https://via.placeholder.com/400x200'}
                                        alt={article.title}
                                        sx={{ height: 200 }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">{article.title}</Typography>
                                        <Typography variant="body2" color="textSecondary">{article.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
            <Box id="ticker-tape-container" sx={{ mt: 2 }}></Box>
            <Box id="tradingview-top-stories" sx={{ mt: 2 }}></Box>
        </Box>
    );
}

export default News;
