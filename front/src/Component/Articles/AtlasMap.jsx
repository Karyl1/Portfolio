import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Styles from '../MaterialConfig/MaterialConfig';
import back from '../backend-service';

function AtlasMap(props) {
    const { classes } = props;
    return (
        <div>
        <div className='articleHeaderImageBackground'>
            <h1 className='articleTitle'>AtlasMap</h1>
        </div>
            <Grid className='articleGrid'>
                <Container maxWidth='lg' className='articleContainer'>
                    <h3 className='articleUnderTitle'>Présentation d'AtlasMap</h3>
                    <p>
                        AtlasMap est un site web de création et de partage de parcours. 
                        Il peut être utilisé pour créer des parcours de randonnée, de tourisme, de course à vélo etc... 
                    </p>    
                    <p>
                        Plusieurs fonctionnalités sont disponibles comme l’ajout et la suppression de point d’influence, 
                        cette option est intéressante car elle permet d’ajouter un titre, un texte et même une image à un marqueur posé sur la carte.
                        Avec cette option, vous pouvez par exemple définir qu’un point durant votre parcours est un mirador, 
                        définir un texte expliquant brièvement son histoire et une image pour apercevoir son point de vue. 
                        Si vous ajoutez une information sur un marqueur, il sera automatiquement transformé pour être démarqué des autres.
                        Il y a également d’autres fonctionnalités pour faciliter la création de parcours, 
                        des boutons pour supprimer tous les marqueurs sur la carte, supprimé seulement le dernier ou supprimé le marqueur sélectionné.
                    </p>
                    <p>
                        En bas de la page, vous retrouverez l’une des fonctionnalités les plus importantes de ce site web avec la création d’itinéraire,
                        trois options sont disponibles : en voiture, à pied et à vélo.
                        En choisissant l’option voiture, 
                        le parcours généré vous guidera à votre destination avec l’itinéraire le plus rapide tout en respectant le code de la route, 
                        sans passer par des sens interdits ou par des rues piétonne par exemple. De même pour les vélos et les piétons, chaque itinéraire sera différent.
                    </p>
                    <p>
                        Enfin, une fois que le trajet voulu est terminé, une option de sauvegarde est disponible, 
                        il suffit d’entrer un nom et le parcours sera enregistré dans le serveur. Pour le récupérer,
                        appuyez sur Importer et entrez le nom du parcours voulu.
                    </p>
                </Container>
            </Grid>

            <Grid container justify='center'>
                <Button className={classes.button} href='/'>Retour à l'accueil</Button>
            </Grid>
        </div>
    );
}

export default withStyles(Styles)(AtlasMap);