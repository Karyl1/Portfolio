import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/Styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Styles from '../MaterialConfig/MaterialConfig';
import Container from '@material-ui/core/Container';
import back from '../backend-service';
import Comment from '../Comment';
import GoogleOAuth from '../GoogleOAuth';

function RandoSmart(props) {
    const { classes } = props;

    // recupère la liste des commentaires
    const [commentList, setCommentList] = useState({});

    const response = (response) => {
        if(response.status === 200) {
            if(response.data !== undefined)
                setCommentList(response.data);
            console.log(response.message);
            }
        else
            console.error(response.data);
    }

    // 1 = id_project
    useEffect(() => {
        const id_project = 1;
        const url = `/get_comment?index=${id_project}`;
        
        back.getRequest(url, response);
    }, []);

    const addComment = () => {
        // 1 = id_user, blabla = content, 1 = id_project 
        const id_user = 1;
        const content = 'tests';
        const id_project = 1;
        const body = JSON.stringify({id_user, content, id_project});
        const url = '/add_comment';
        back.postRequest(url, body, response);
    }

    const addLikeComment = () => {
        //3 = id_user, 1 = id_comment
        const id_user = 1;
        const id_comment = 2;
        const url = '/add_like_comment';
        const body = JSON.stringify({id_user, id_comment});
        back.postRequest(url, body, response)
    }

    const updateComment = () => {
        const id_user = 1; // id de l'utilisateur
        const id_comment = 2;
        const content_comment = 'it works';
        const body = JSON.stringify({id_user, id_comment, content_comment});
        const url = '/update_comment';
        back.updateRequest(url, body, response);
    }

    const deleteComment = () => {
        const id_user = 1; // id de l'utilisateur
        const id_comment = 2;
        const body = JSON.stringify({id_user, id_comment});
        const url = '/delete_comment';
        back.deleteRequest(url, body, response);
    }
    return (
        <div>
            <button onClick={() => addComment()}>Ajout commentaire</button>
            <button onClick={() => addLikeComment()}>Like commentaire</button>
            <button onClick={() => updateComment()}>Modifie commentaire</button>
            <button onClick={() => deleteComment()}>Supprime commentaire</button>
            <div className='articleHeaderImageBackground'>
                <h1 className='articleTitle'>RandoSmart</h1>
            </div>
            <Grid className='articleGrid'>
                <Container maxWidth='lg' className='articleContainer'>
                    <img src='https://via.placeholder.com/250x250' alt='placeholder' className='articleImageFloatTextRight'/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, excepturi consectetur. Optio dolore est nisi unde dolores, consectetur beatae harum excepturi debitis ut? Quos repellat sed, nulla nesciunt aspernatur a? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laborum consequuntur voluptate minima, blanditiis eos aliquam ullam quam eum consectetur ex, eligendi aspernatur doloremque cumque ab. Eos natus doloribus unde! lrem
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere expedita optio animi reprehenderit nulla aliquam quaerat? Hic quam autem, at totam dignissimos asperiores excepturi veniam, in sequi ipsa architecto exercitationem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni totam fugiat nobis officia commodi numquam nemo impedit iste sit. Iste nobis ullam nam quisquam corporis? Temporibus itaque doloribus amet?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate soluta quo nulla aut mollitia cumque, repellendus maiores suscipit sint voluptatem magnam eos eligendi, eveniet fugiat neque natus sit, nihil quaerat?
                    </p>
                    <hr />
                    <img src='https://via.placeholder.com/1200x200' alt='placeholder' className='articleImageFluid'/>
                    <hr />
                    <img src='https://via.placeholder.com/250x250' alt='placeholder' className='articleImageFloatTextLeft'/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, excepturi consectetur. Optio dolore est nisi unde dolores, consectetur beatae harum excepturi debitis ut? Quos repellat sed, nulla nesciunt aspernatur a? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laborum consequuntur voluptate minima, blanditiis eos aliquam ullam quam eum consectetur ex, eligendi aspernatur doloremque cumque ab. Eos natus doloribus unde! lrem
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere expedita optio animi reprehenderit nulla aliquam quaerat? Hic quam autem, at totam dignissimos asperiores excepturi veniam, in sequi ipsa architecto exercitationem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni totam fugiat nobis officia commodi numquam nemo impedit iste sit. Iste nobis ullam nam quisquam corporis? Temporibus itaque doloribus amet?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate soluta quo nulla aut mollitia cumque, repellendus maiores suscipit sint voluptatem magnam eos eligendi, eveniet fugiat neque natus sit, nihil quaerat?
                    </p>
                    </Container>
                </Grid>
                
            <Grid container justify='center'>
                <Button className={classes.button} href='/'>Retour à l'accueil</Button>
            </Grid>
            
            <hr className='hrGrey'/>

            <GoogleOAuth/>
            {Object.values(commentList).map((el, i) => <Comment userInfo={el} key={'comment '+i}/>)}

        </div>
    );
}

export default withStyles(Styles)(RandoSmart);