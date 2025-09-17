  const container=document.querySelector(".container")
        const temp=document.createDocumentFragment()
        const sounds=["audio1","audio2","audio3","audio4","audio5","stop"]
        for(let sound of sounds){
            createbutton(sound)
        }
         container.appendChild(temp)
        function createbutton(sound){
          const btn=document.createElement("button")
          btn.innerText=sound
          btn.id=sound
          btn.className="btn"
          temp.appendChild(btn)
          btn.addEventListener("click",stopsound)
          btn.addEventListener("click",()=>playsound(btn))
          
        }
        let playlist={}
        function playsound(btn){
            console.log(btn.id)
            if(btn.id=="stop") return
            const audio=new Audio(`sounds/${btn.id}.mp3`)
            console.log(audio)
            console.log(btn.id)
            console.log(playlist)
            playlist[btn.id]=audio
             console.log(playlist)
            audio.play()
        }
        function stopsound(){
            for(let key in playlist){
                const audio=playlist[key]
                audio.pause()
            }
        }
   