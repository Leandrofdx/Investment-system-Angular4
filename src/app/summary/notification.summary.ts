import {EventEmitter} from '@angular/core'

export class NotificationSummary {
  notifier = new EventEmitter<string>()

  notifySummary(message: string){
    this.notifier.emit(message)
  }

}
