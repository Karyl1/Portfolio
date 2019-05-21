import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Grid from '@material-ui/core/Grid';

const tableau = {
  CryptoTrader: {
    name: 'CryptoTrader',
    desc: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
    image: 'https://image.noelshack.com/fichiers/2019/21/1/1558356766-cryptotrader.png',
  },
  AtlasMap: {
    name: 'Atlas Map',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
    image: 'https://image.noelshack.com/fichiers/2019/21/1/1558356781-atlasmap.png'
  },
  Bonillio: {
    name: {
      name: 'Bonillio',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo esse saepe iusto nobis, veritatis ut, perspiciatis modi recusandae repellat alias suscipit autem corrupti praesentium porro nihil consequuntur atque obcaecati!',
      image: 'https://image.noelshack.com/fichiers/2019/21/1/1558357125-bonillio.png'
    }
  }
}

class Article extends Component {
  render() {
    let itExist = false
    const display = tableau[this.props.match.params.project];
    display === undefined ? itExist = false : itExist = true;
    return (
      <div>
        {itExist ?
          <div>

            {/* <div style={{ height: '100px', background: 'black' }} /> */}
            <Grid container justify='center'>
              <Grid item xs={8} className='gridArticle'>
                <h1 className='gridArticleh1'>{display.name}</h1>
                <p>{display.desc}</p>
              </Grid>
            </Grid>
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