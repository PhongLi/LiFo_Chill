import ReactPlayer from 'react-player';
import { useRef } from 'react';
import { effects } from '~/assets/data/audios.data';
import { useSelector } from '~/hooks/useSelector';
import { SessionSelect } from '~/store/session';
function EffectsBoard() {
    const currentEffects = useSelector(SessionSelect.getPlayerEffects);
    const playerMuted = useSelector(SessionSelect.getPlayerMuted);
    const noisesRef = useRef([]);
    const handleLoop = (loaded, played, playedSeconds, index) => {
        // console.log('loaded', loaded);
        // console.log('played', played);
        // console.log('playedSeconds', playedSeconds);
        const ms = (1 - played) * playedSeconds * 1000;
        const player = noisesRef.current[index].player;
        if (ms < 2300 && played > 0.85) {
            player.seekTo(0);
            player.handlePlay();
        }
    };
    return (
        <div style={{ display: 'none' }}>
            {effects.map((e, index) => {
                const effect = currentEffects.find((d) => d.type === e.type);
                const level = isNaN(effect.level) ? 0 : effect.level; //unless check NaN, will get error with html volume
                return (
                    <ReactPlayer
                        ref={(el) => {
                            noisesRef.current[index] = el;
                        }}
                        key={index}
                        id={e.type}
                        url={e.url}
                        volume={level ?? 0}
                        onProgress={(p) => handleLoop(p.loaded, p.played, p.playedSeconds, index)}
                        playing={!playerMuted && effect.active}
                    />
                );
            })}
        </div>
    );
}

export default EffectsBoard;
