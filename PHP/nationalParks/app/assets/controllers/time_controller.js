import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    multiplier=100
    time=0
    showTime(){
      this.element.textContent = `Timer: ${new Date(this.time).toISOString().split("T")[1].split("Z")[0]}`;
    }
    connect() {
        this.showTime()
        setInterval(() => {
          this.time+=this.multiplier  
          this.showTime()
        }, this.multiplier);
    }
}
