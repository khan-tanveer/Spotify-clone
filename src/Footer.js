import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src="data:image/jpeg;base64,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"
                    alt="images" />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>user</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;