import React, {useEffect} from 'react'
import useChapter from '../api/useChapter';
import useEpisode from '../api/useEpisode';
import useTask from '../api/useTask';
import usePanel from '../api/usePanel';

export default function Demo() {
    const [chapters, setChapters] = useChapter([]);
    const [episodes, setEpisodes] = useEpisode([]);
    const [tasks, setTasks] = useTask([]);
    const [panels, setPanels] = usePanel([]);

    useEffect(() => {
       
        setChapters("findAllChapters", "");
        setEpisodes("findAllEpisodes", "");
        setTasks("findAllTasks", "");
        setPanels("findAllPanels", "");
        // eslint-disable-next-line 
      }, [])

      console.log(chapters)
      console.log(episodes)

      console.log(tasks)

      console.log(panels)



  return (
    <div>demo</div>
  )
}
