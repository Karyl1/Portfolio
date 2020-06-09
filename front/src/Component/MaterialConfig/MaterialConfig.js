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
        marginLeft: '.4rem'
    },
    avatarComment: {
        paddingTop: '.2rem',
        margin: '.3rem',
        paddingRight: '.6rem'
    },
    contentComment: {
        lineHeight: '1'
    },
    comment: {
        margin: '1rem'
    }
});

module.exports = styles;