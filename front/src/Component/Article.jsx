/* import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const tableauBasic = {
	RandoSmart: {
		name: 'RandoSmart',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
		image: 'https://image.noelshack.com/fichiers/2019/25/2/1560857345-randosmart.png',
	},
	CryptoTrader: {
		name: 'CryptoTrader',
		desc: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
		image: 'https://image.noelshack.com/fichiers/2019/21/1/1558356766-cryptotrader.png',
	},
	AtlasMap: {
		name: 'Atlas Map',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
		image: 'https://image.noelshack.com/fichiers/2019/21/1/1558356781-atlasmap.png',
	},
	Bonillio: {
		name: 'Bonillio',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
		image: 'https://image.noelshack.com/fichiers/2019/21/1/1558357125-bonillio.png',
	}
}

const tableauTech = {
	RandoSmart: {
		name: 'RandoSmart',
		desc: 'epe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
		image: 'https://image.noelshack.com/fichiers/2019/25/2/1560857345-randosmart.png',
		github: '',
	},
	CryptoTrader: {
		name: 'CryptoTrader',
		desc: 'epe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
		image: 'https://image.noelshack.com/fichiers/2019/21/1/1558356766-cryptotrader.png',
		github: '',
	},
	AtlasMap: {
		name: 'Atlas Map',
		desc: 'epe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
		image: 'https://image.noelshack.com/fichiers/2019/21/1/1558356781-atlasmap.png',
		github: '',
	},
	Bonillio: {
		name: 'Bonillio',
		desc: 'epe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
		image: 'https://image.noelshack.com/fichiers/2019/21/1/1558357125-bonillio.png',
		github: '',
	}
}

export default function Article (props){
	const [ devMod, setDevMod ] = useState(0);

	function handleChangeDevMod(e, value) {
		setDevMod(value);
	}

	let itExist = false;
	const display = devMod === 0 ? tableauBasic[props.match.params.project] : tableauTech[props.match.params.project];
	display === undefined ? itExist = false : itExist = true;
	return (
		<div className='backgroundArticle'>
			{itExist ?
				<div>
					<hr className='hrArticle'/>
					<Grid container justify='center'>
						<Tabs
							value={devMod}
							indicatorColor='secondary'
							textColor='secondary'
							onChange={handleChangeDevMod}

						>
							<Tab label='Description basique' />
							<Tab label='Desciption technique' />
						</Tabs>
					</Grid>

					{devMod === 0 ? 
						<Grid container justify='center'>
							<Grid item xs={8} className='gridArticle'>
								<h1 className='gridArticleh1'>{display.name}</h1>
								<p>{display.desc}</p>
							</Grid>
						</Grid>
						:	 
						<Grid container justify='center'>
							<Grid item xs={8} className='gridArticle'>
								<h1 className='gridArticleh1'>{display.name}</h1>
								<p>{display.desc}</p>
							</Grid>
						</Grid>
						
					}
					<div style={{ height: '100px', background: 'black' }} />
				</div>
				:
				<h1>404</h1>
			}
		</div>
	)
} */

import React from 'react';
import RandoSmart from './Articles/RandoSmart';
import AtlasMap from './Articles/AtlasMap';
import Bonillio from './Articles/Bonillio';
import CryptoTrader from './Articles/CryptoTrader';
import NotFound from './NotFound';

export default function Article(props) {
	const components = {
		RandoSmart: <RandoSmart />,
		CryptoTrader: <CryptoTrader />,
		AtlasMap: <AtlasMap />,
		Bonillio: <Bonillio />,
		NotFound: <NotFound />
	};
	const toDisplay = props.match.params.project;
	const WillBeShowing = components[toDisplay] !== undefined ? components[toDisplay] : components.NotFound;
	return (
		<div>
			{WillBeShowing}
		</div>
	);
}