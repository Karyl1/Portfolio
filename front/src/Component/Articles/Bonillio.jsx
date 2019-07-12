import React from 'react';
import { withStyles } from '@material-ui/core/Styles'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import Styles from '../MaterialConfig/MaterialConfig';
import HeaderBonillio from '../../asset/HeaderBonillio.png'; 

function Bonillio(props) {
    const { classes } = props;
    return (
        <div>
        <div className='articleHeaderImageBackground'>
            <h1 className='articleTitle'>Bonillio</h1>
        </div>
            <Grid className='articleGrid'>
                <Container maxWidth='lg' className='articleContainer'>
                    <h3 className='articleUnderTitle'>Qu'est ce que Bonillio ?</h3>
                    <p>
                        Bonillio est un projet qui nous a été demandé au cours de notre formation de <strong>développeur web et mobile</strong>. 
                        Réalisé en groupe de quatre personnes, en sept jours, il est le premier projet de notre session. 
                        Après seulement deux semaines de formation, nous l’avons imaginé avec une étudiante en pâtisserie à l’École Supérieure des Métiers (ESM).
                    </p>
                    <p>
                        Ce site web a été programmé en <strong>HTML</strong>, <strong>CSS</strong> et <strong>Javascript</strong>, l’enjeu de ce projet était de s’entraîner au travail de groupe, 
                        au partage des tâches et à l’utilisation d’un logiciel de gestion de version (<strong>Github</strong>).
                    </p>
                    <hr />
                    <img src={HeaderBonillio} alt='Bonillio signature' className='articleImageFluid'/>
                    <hr />
                    <h3 className='articleUnderTitle'>Côté technique</h3>
                    <p>
                        Le site comprend 4 pages, sur chacune de ses pages on retrouve le même <strong>carousel</strong> et la même <strong>navbar</strong>. 
                        Inférieur à 992 pixels de largeur, la <strong>navbar</strong> se transforme en <strong>Burger Menu</strong> grâce à la magie de Bootstrap.
                    </p>
                    <p>
                        Sur l’accueil, on dispose de plusieurs <strong>cards</strong> avec une animation de rotation sur l’icône. 
                        Ses <strong>cards</strong> redirigent vers des postes Instragram avec des photos de certains produit.
                    </p>
                    <p>
                        Dans l’onglet galerie, deux <strong>carrousels</strong> sont présentés, un premier pour les créations sucrées et un deuxième pour les salées. 
                        Sur chaque photo un titre apparaît en animation.
                    </p>
                    <p>
                    La biographie est un ensemble de deux paragraphes présentant le parcours de Mme. Bonillio et son école, 
                    accompagné d’une photo avec un <strong>-webkit-filter</strong> pour la rendre plus dynamique.
                    </p>
                    <p>
                    Enfin la dernière page est celle de contact, derrière cette page ce cache un algorithme vérifiant si tous les champs sont remplis, 
                    sinon une alerte apparaît mentionnant les champs manquants.
                    </p>
                    <hr />
                </Container>
            </Grid>

            <Grid container justify='center'>
                <Button className={classes.button} href='/'>Retour à l'accueil</Button>
            </Grid>
        </div>
    );
}

export default withStyles(Styles)(Bonillio);