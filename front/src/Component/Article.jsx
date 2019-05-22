import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const tableauBasic = {
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

class Article extends Component {

	state = {
		devMod: 0
	}

	handleChangeDevMod = (e, value) => {
		this.setState({ devMod: value });
	}

	render() {
		let itExist = false;
		const { devMod } = this.state;
		const display = devMod === 0 ? tableauBasic[this.props.match.params.project] : tableauTech[this.props.match.params.project];
		display === undefined ? itExist = false : itExist = true;
		return (
			<div className='backgroundArticle'>
				{itExist ?
					<div>
						<hr className='hrArticle' />
						<Grid container justify='center'>
							<Tabs
								value={devMod}
								indicatorColor='secondary'
								textColor='secondary'
								onChange={this.handleChangeDevMod}

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
	}
}

export default Article;