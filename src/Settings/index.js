import React from 'react';
import WelcomeMessage from '../Settings/WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';


export default function() {
    return (
        <Page name='settings'> 
            <WelcomeMessage /> 
            <CoinGrid topSection/>
            <ConfirmButton /> 
            <Search />
            <CoinGrid />
        </Page>
    ) 
}