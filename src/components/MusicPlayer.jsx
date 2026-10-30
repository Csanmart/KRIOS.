import { useRef, useState } from "react";
import '../style/MusicPlayer.css'
function MusicPlayer(){
    const audioRef = useRef(null);

    const [playing, setPlaying] = useState(false);

    const toggleMusic = async () => {
        if (!audioRef.current) return;

        if(playing){
            audioRef.current.pause();
            setPlaying(false);
        }else{
            try{
                await audioRef.current.play();
                setPlaying(true);
            }
            catch(error){
                console.log("Error, no se puede reproducir el beat");
            } 
        }
    }
    
    return(
        <div className="music-player">
            <audio 
            ref={audioRef}
            src="../public/audio/TrapMusic.mp3"
            loop
            onEnded={()=>setPlaying(false)}
            onPause={()=>setPlaying(false)}
            onPlay={()=>setPlaying(true)}
            />

            <button onClick={toggleMusic} className="music-button">
                <span>{playing ? "II" : "▶"}</span>
                <span>{playing ? "PAUSE" : "PLAY MUSIC"}</span>
            </button>
        </div>
    )
}

export default MusicPlayer;