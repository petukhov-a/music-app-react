import { ChangeEvent, FC, useState } from 'react';
import { tracklist } from '../assets/tracklist';
import style from "./mainPage.module.scss";
import Track from '../components/Track';
import { Input } from "@mui/material";

const runSearch = (query: string) => {
  if (!query) {
    return tracklist;
  }

  const lowerCaseQuery = query.toLowerCase();

  return tracklist.filter(track =>
    track.title.toLowerCase().includes(lowerCaseQuery) ||
    track.artists.toLowerCase().includes(lowerCaseQuery))
}

const MainPage: FC = () => {
  const [tracks, setTracks] = useState(tracklist);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const foundedTracks = runSearch(event.target.value);

    setTracks(foundedTracks);
  }

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск треков"
        onChange={handleChange}  
      />
      <div className={style.list}>
        {tracks.map((track) => (
          <div>
            <Track key={track.id} {...track} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainPage 