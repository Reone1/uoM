# WebRtc

WEB기반 Real-time Communications으로 Peer-to-Peer의 통신을 기반으로 하고 있다.

몇몇 기업들에 의해서 개발되었으나, google에서 표준화 web 표준이 되었다.

## Core-concept

peer-to-peer를 표준으로 개발되었기 때문에, 단일 연결을 핵심 컨셉으로 가지고 있다.

Web에 있는 내장 navigator 인스턴스를 통해 media장치의 stream을 외부로 전달하는 기능을 가지고 있다.

각각의 peer는 peer Instance를 생성하여 외부 mediaStream을 받아 web에서 처리할 수 있게 된다.

다중의 peer를 연결하기 위해서는 turn/stun 등의 중계서버 설정을 해야 한다.

**Turn/Stun** 서버는 동작 방식의 차이가 있으며, 간단하게 정리하면 다음과 같다.

- **TURN** : peer 사이에서 media 데이터 처리가 어려운 경우 직접 데이터 전송을 해주는 서버이다. 미디어 데이터를 직접 전송하여 리소스 사용량이 많다.
- **STUN** : peer가 퍼블릭 ip를 확인하여 다른 peer와 통신할 수 있도록 보조하는 역할이다. 방화벽 뒤에 숨겨진 peer의 정보를 공개가능 한정보로 랩핑하여 connection을 지원한다.

실제로 데이터 통신에는 TURN 서버만 영향을 주어, 다중 peer연결은 위해서는 TURN 서버를 반드시 구축해야 할 필요가 있다.

내부망 (같은 NAT을 사용)하는 경우 STUN 서버가 효용이 없을 수 있다.

## Sample code 

`react`를 이용한 sample code 

```javascript
import { useEffect, useRef } from "react"
import useSocket from "../../hook/useSocket"

interface UseRefProps {
    localVideoRef:React.RefObject<HTMLVideoElement> 
    remoteVideoRef:React.RefObject<HTMLVideoElement> 
}

const useRtc = ({ localVideoRef, remoteVideoRef } : UseRefProps) => {
    const stream = useRef<MediaStream>()
    const peer = new RTCPeerConnection()
    const ws = useSocket()

    const initStream = async () => {
        console.log('init video stream')
        const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        stream.current = mediaStream
        if(localVideoRef.current) localVideoRef.current.srcObject = mediaStream
        // setStream(mediaStream)
        return mediaStream
    }
    
    const initPeer = async (stream: MediaStream ) => {
        console.log('init peerconnection')
        peer.onicecandidate = e => {
            const message: any = {
                id: stream.id,
                type: 'candidate',
                candidate: null,
            };
            if (e.candidate) {
                message.candidate = e.candidate.candidate;
                message.sdpMid = e.candidate.sdpMid;
                message.sdpMLineIndex = e.candidate.sdpMLineIndex;
            }
            ws?.send(JSON.stringify(message));
        };
        peer.ontrack = e => {
            if(remoteVideoRef.current) remoteVideoRef.current.srcObject = e.streams[0]
        };
        stream?.getTracks().forEach(track => peer.addTrack(track, stream));
    }

    const init = async () => {
        const initstream = await initStream()
        initPeer(initstream)
    }

    const handleOffer = async (offer: any) => {
        console.log('called offer')
        await peer?.setRemoteDescription(offer)
        const answer = await peer?.createAnswer()

        ws?.send(JSON.stringify({ id: stream?.current?.id, type:'answer', sdp: answer?.sdp }))
        await peer?.setLocalDescription(answer)
    }

    const handleCandidate = async (candidate: any) => {
        console.log('called handler candidate')
        await peer?.addIceCandidate(candidate.candidate ? candidate : null)
    }

    const handleAnswer = async (answer: any) => {
        console.log('called answer')
        await peer?.setRemoteDescription(answer)
    }

    const makeCall = async () => {
        console.log('calls')
        const offer = await peer?.createOffer()
        ws?.send(JSON.stringify({ id: stream?.current?.id, type:'offer', sdp: offer?.sdp}))
        await peer?.setLocalDescription(offer)
    }

    useEffect(() => {
        init()
    }, [])
    
    useEffect(() => {
        ws.onmessage = e => {
            const data = JSON.parse(e.data)
            switch (data.type) {
                case 'offer':
                    if (data.id === stream?.current?.id) break
                    handleOffer(data);
                    break;
                case 'answer':
                    if (data.id === stream?.current?.id) break
                    handleAnswer(data);
                    break;
                case 'candidate':
                    if (data.id === stream?.current?.id) break
                    handleCandidate(data);
                    break;
                default:
                    console.log('unhandled', e);
                    break;
            }
        }
    },[ws])

    return { makeCall }
}

export default useRtc
```

몇 가지 보완해야할 점이 있지만, 기본 동작에는 큰 문제가 없다.

websocket을 이용하여 iceconnection 정보를 주고 받았으며, 이후 peer-to-peer연결을 통해 데이터 통신을 하게 된다.
