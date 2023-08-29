import {Injectable, NgZone} from "@angular/core";
import {Observable} from "rxjs";
import {DayPilot} from "@daypilot/daypilot-lite-angular";
import {HttpClient} from "@angular/common/http";
import * as colorette from "colorette";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allowedEvents = [
    "businessCentralToAngular"
  ];

  private subscriptions : {[key:string]:Function[];} = {};


  static colors = {
    green: "rgba(255, 255, 0, 255)",
    yellow: "#ffc200",
    red: "#cc4125",
    gray: "#808080",
    blue: "#2e78d6",
  };

  events: { start: DayPilot.Date; end: DayPilot.Date; id: number; backColor: string; text: string; participants: number }[] = [
    // {
    //   id: 1,
    //   text: "Event 1",
    //   start: DayPilot.Date.today().firstDayOfWeek().addHours(10),
    //   end: DayPilot.Date.today().firstDayOfWeek().addHours(13),
    //   participants: 2,
    // }
    // {
    //   id: 2,
    //   text: "Event 2",
    //   start: DayPilot.Date.today().firstDayOfWeek().addDays(1).addHours(12),
    //   end: DayPilot.Date.today().firstDayOfWeek().addDays(1).addHours(15),
    //   backColor: DataService.colors.green,
    //   participants: 1,
    // },
    // {
    //   id: 3,
    //   text: "Event 3",
    //   start: DayPilot.Date.today().firstDayOfWeek().addDays(2).addHours(13),
    //   end: DayPilot.Date.today().firstDayOfWeek().addDays(2).addHours(16),
    //   backColor: DataService.colors.yellow,
    //   participants: 3,
    // },
    // {
    //   id: 4,
    //   text: "Event 4",
    //   start: DayPilot.Date.today().firstDayOfWeek().addDays(3).addHours(11),
    //   end: DayPilot.Date.today().firstDayOfWeek().addDays(3).addHours(15),
    //   backColor: DataService.colors.red,
    //   participants: 4,
    // },
  ];

  DayPilot = DayPilot;

  constructor(private http : HttpClient, private zone: NgZone) {
    this.allowedEvents.forEach((eventName) => {
      this.subscriptions[eventName] = [];
    });
  }


  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

  getColors(): any[] {
      const colors = [
        {name: "Green", id: DataService.colors.green},
        {name: "Yellow", id: DataService.colors.yellow},
        {name: "Red", id: DataService.colors.red},
        {name: "Gray", id: DataService.colors.gray},
        {name: "Blue", id: DataService.colors.blue},
      ];
      return colors;
  }

}
