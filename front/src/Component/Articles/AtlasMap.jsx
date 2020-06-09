import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Styles from '../MaterialConfig/MaterialConfig';
import back from '../backend-service';
import TextField from '@material-ui/core/TextField';
import Comment from '../Comment';
import GoogleOAuth from '../GoogleOAuth';
import { connect } from 'react-redux';

function AtlasMap(props) {
    const { classes, isConnected, userConnected } = props;
    const [commentList, setCommentList] = useState({});
    const [contentComment, setContentComment] = useState('');
    const [contentState, setContentState] = useState(false);
    // recupère la liste des commentaires
    useEffect(() => {getCommentList()}, []);
    const idProject = 3;

    const getCommentList = () => {
        const id_project = idProject;
        const url = `/get_comment?index=${id_project}`;
        
        back.getRequest(url, response);
    }

    const response = (response) => {
        if(response.status === 200) {
            if(response.data !== undefined)
                setCommentList(response.data.reverse());
            if(response.message !== undefined)
                console.log(response.message);
            }
        else
            console.error(response.data);
    }

    const addComment = (e) => {
        e.preventDefault();
        if(isConnected) {
            if( contentComment !== null && contentComment.length > 3) {
                const id_user = userConnected.id_user;
                const id_project = idProject;
                const content = contentComment;
                const body = JSON.stringify({id_user, content, id_project});
                const url = '/add_comment';
                setContentComment('');
                back.postRequest(url, body, response);
                getCommentList();
            } else {
                setContentState(true)
            }
        } else {
            alert('Vous n\'êtes pas connecté');
        }
    }

    const handleChange = e => {
        setContentComment(e.target.value);
        if (e.target.value.length > 3) {
            setContentState(false);
        }
    }

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
            
            <hr className='hrGrey'/>

            <Grid container style={{maxWidth: '85%', margin: 'auto'}}>
                <Grid item xs={3}>
                    <GoogleOAuth/>
                </Grid>
                <Grid item xs={6}>
                    <h1 className='articleComment'>Espace commentaire</h1>
                </Grid>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={12} >
                    <form onSubmit={addComment}>
                        <TextField fullWidth error={contentState} id="standard-basic" label="Ajouter un commentaire" onChange={handleChange} value={contentComment}/>
                    </form>
                </Grid>
                <Grid item xs={12}>
                    {Object.values(commentList).map((el, i) => <Comment commentInfo={el} refreshComment={getCommentList} callback={response} key={'comment '+i}/>)}
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = store => {
    const { userInfo, isConnected } = store.userInfo;
    return { userConnected: userInfo, isConnected };
}

export default connect(mapStateToProps, null)(withStyles(Styles)(AtlasMap));