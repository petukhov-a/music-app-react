import { FC, useContext } from 'react';
import { TrackItem } from '../assets/tracklist';
import style from "./track.module.scss";
import { IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import secondsToMMSS from '../utils/secondsToMMSS';
import { AudioContext } from '../context/AudioContext';
import cn from 'classnames';

const Track: FC<TrackItem> = (track) => {
  const { preview, title, artists, duration } = track;

  const audioContext = useContext(AudioContext);

  if (!audioContext) {
    return null;
  }

  const { handleToggleAudio, currentTrack, isPlaying } = audioContext;

  const isCurrentTrack = currentTrack.id === track.id;

  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={cn(style.track, isCurrentTrack && style.playing)}>
      <IconButton onClick={() => handleToggleAudio(track)}>
        {isPlaying && isCurrentTrack ? <Pause /> : <PlayArrow />}
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