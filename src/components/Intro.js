import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import IntroLayout from './IntroLayout';

import backgroundImage from '../assets/intro.jpeg'

export default function Intro() {
    return (
        <IntroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Upgrade your Scent
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
            >
                Enjoy the finest fragrances where art meets perfume
            </Typography>


            <Button

                color="secondary"
                variant="contained"
                size="large"
                component="a"
                href="/register"
                sx={{ minWidth: 200 }}
            >
                Register
            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
        </IntroLayout>
    );
}