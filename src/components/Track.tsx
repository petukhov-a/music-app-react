import React, { FC } from 'react';
import { TrackItem } from '../assets/tracklist';
import style from "./track.module.scss";
import { IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import secondsToMMSS from '../utils/secondsToMMSS';

const Track: FC<TrackItem> = (track) => {
  const { id, src, preview, title, artists, duration } = track;

  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={style.track}>
      <IconButton>
        <PlayArrow />
      </IconButton>
      <img className={style.preview} src={preview} alt='' />
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  )
}

export default Track