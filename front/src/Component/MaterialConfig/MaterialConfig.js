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
    }
});

module.exports = styles;