import { FC } from 'react';
import { tracklist } from '../assets/tracklist';
import style from "./mainPage.module.scss";
import Track from '../components/Track';

const MainPage: FC = () => {
  return (
    <div className={style.search}>
      <>Поиск треков</>
      <div className={style.list}>
        {tracklist.map((track) => (
          <div>
            <Track key={track.id} {...track} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainPage 