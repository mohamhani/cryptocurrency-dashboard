import React from 'react';
import styled, {css} from 'styled-components';
import {Tile} from '../shared/Tile';
import {AppContext} from '../App/AppProvider';
import CoinImage from '../shared/CoinImage';

const SpotLightName = styled.h2`
    text-align: center;
`;

const CoinSpotLight = () =>  {
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) => 
                <Tile>
                    <SpotLightName>{coinList[currentFavorite].CoinName}</SpotLightName>
                    <CoinImage spotLight coin={coinList[currentFavorite]}/>
                </Tile>
            }
        </AppContext.Consumer>
        
    )
}

export default CoinSpotLight;
