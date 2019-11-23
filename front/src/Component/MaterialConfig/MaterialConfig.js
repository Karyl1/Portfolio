const styles = theme => ({
    button: {
        border: '2px solid black',
        letterSpacing: '2px',
        '&:hover': {
          backgroundColor: 'black',
          color: 'white',
          transitionDuration: '.6s',
        }
    },
    chip: {
      margin: '.5rem'
    },
    dateComment: {
        padding: '.1rem',
        marginLeft: '.7rem'
    },
    sizeComment: {
        maxWidth: '60%',
        padding: '.6rem;'
    },
    avatarComment: {
        paddingTop: '.3rem',
        margin: '.3rem'
    }
});

module.exports = styles;