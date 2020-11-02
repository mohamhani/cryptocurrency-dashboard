import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import {SelectableTile} from '../shared/Tile';
import CoinTile from './CoinTile';

export const CointGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`;

function getLowerSectionCoins(coinList, filteredCoins) {
    return (filteredCoins && Object.keys(filteredCoins)) ||
        Object.keys(coinList).slice(0, 100);
}

function getCoinsToDisplay(coinList, topSection, favorites, filteredCoins) {
    return (
        topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins)
    )
}

export default function({topSection}) {
    return (
        <AppContext.Consumer>
            {({coinList, favorites, filteredCoins}) => (
                <CointGridStyled>
                    {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey => <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey}/>)}
                </CointGridStyled>
            )}
        </AppContext.Consumer>
    )
}