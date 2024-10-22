let text = document.querySelector(".timer-box");


function timer() {
    const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1);
    setInterval(()=>{
        const now = new Date(); 
            const totalSeconds = Math.floor((newYearDate - now) / 1000);    
            const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
            const days = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
            const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
            const seconds = totalSeconds % 60;
        
            const rtf = new Intl.NumberFormat("ru", { numeric: "auto" });
        
            const dates = [
              rtf.format(months, "month"),
              rtf.format(days, "day"),
              rtf.format(hours, "hour"),
              rtf.format(minutes, "minute"),
              rtf.format(seconds, "second"),
            ];

        for (let index = 0; index < text.children.length; index++) {
          text.children[index].firstElementChild.innerHTML = dates[index];
        }
    },1000)
  
}

timer()
