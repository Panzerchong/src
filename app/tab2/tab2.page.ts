import { Component } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { SleepService } from '../../app/services/sleep.service';
import { OvernightSleepData  } from '../../app/data/overnight-sleep-data';
import { Tab1Page } from '../../app/tab1/tab1.page';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  showPicker = false;
  formattedString = '';
  test ='';
  formattedBedTime = '';
  formattedEndDay = '';
  formattedWakeUp = '';

  currentDateLog ='';
  currentDateDuration='';


  isDateSame = false;
  dateValue = format(new Date(),'yyyy-MM-dd');
  bedTimeValue =format(new Date(),'yyyy-MM-dd');
  endDateValue =format(new Date(),'yyyy-MM-dd');
  wakeUpTimeValue =format(new Date(),'yyyy-MM-dd');

  isModalOpen = false;
  overnightArray: String[];
  recentOvernight: String;
  durationArr:Tab1Page[];
  testovernightArray:OvernightSleepData[];
 
  

 
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  constructor(private sleepService:SleepService) {
    this.setToday();
    this.setBedTime();
    this.setEndDay();
    this.setWakeUp();

    this.overnightArray = new Array;
    this.durationArr =[];
    this.testovernightArray =[];
    this.recentOvernight= this.overnightArray[this.overnightArray.length-1]; 

    console.log(this.overnightArray.length);
   
    
  }
  ngOnInit() {
    this.testovernightArray =SleepService.AllOvernightData;
  }
  setToday(){
    this.formattedString = format(parseISO(format(new Date(),'yyyy-MM-dd')), 'MMM d, yyyy');
    //this.showPicker = true;
    console.log("SET TODAY " + this.dateValue);
  }
  setBedTime(){
    this.formattedBedTime = format(parseISO(format(new Date(),'yyyy-MM-dd')), 'HH:mm aaa');
    console.log("SET bed " + this.bedTimeValue);
  }
  setEndDay(){
    this.formattedEndDay = format(parseISO(format(new Date(),'yyyy-MM-dd')), 'MMM d, yyyy');
  }
  setWakeUp(){
    this.formattedWakeUp = format(parseISO(format(new Date(),'yyyy-MM-dd')), 'HH:mm aaa');
  }
  dateChanged(value: any){
    this.dateValue = value;
    //this.bedTimeValue = this.dateValue;
    this.formattedString = format(parseISO(value),'MMM d, yyyy');
    this.showPicker = true; 
    this.formattedEndDay = this.formattedString;
    
    if(this.formattedEndDay == this.formattedString){
      console.log("Same day");
      this.isDateSame = true;
    }else{
      console.log("not Same day");
      this.isDateSame = false;
    }
  
  }
  
  timeChanged(ele: any){
    this.bedTimeValue = ele;
    //this.dateValue = this.bedTimeValue;
    this.formattedBedTime = format(parseISO(ele),'HH:mm aaa');
    this.showPicker = true;
    this.formattedWakeUp = this.formattedBedTime;
    console.log("kkk" + this.formattedBedTime)
    if(this.dateValue == this.endDateValue){
      console.log("Same day");
      this.isDateSame = true;
    }else{
      console.log("not Same day");
      this.isDateSame = false;
    }
   
  
  }
  endDateChanged(value: any){
    this.endDateValue = value;
    //this.wakeUpTimeValue = this.endDateValue;
    this.formattedEndDay = format(parseISO(value),'MMM d, yyyy');
    this.showPicker = true; 
    if(this.dateValue == this.endDateValue){
      console.log("Same day");
      this.isDateSame = true;
    }else{
      console.log("not Same day");
      this.isDateSame = false;
    }
    console.log(this.formattedEndDay)
    console.log("End day called");
    
  }
  wakeUpTimeChanged(ele: any){
    this.wakeUpTimeValue = ele;
    this.formattedWakeUp = format(parseISO(ele),'HH:mm aaa');
    this.showPicker = true;
    console.log(this.formattedWakeUp)
   
  
  }
  addDateClicked(){
    console.log("Start Day: " + this.dateValue);
    console.log("End Day: " + this.endDateValue);
    console.log("Bed Time: " + this.bedTimeValue);
    console.log("Wake Up Time: " + this.wakeUpTimeValue);
    //this.bedTimeValue = this.dateValue;
    var startDay = new Date(this.dateValue);
    var startDay_ms = startDay.getTime();
    
    var endDay = new Date(this.endDateValue);
    var endDay_ms = endDay.getTime();
    var diffDay = endDay_ms - startDay_ms;
    if(diffDay < 0){
      diffDay = 0;
    }
  


    var hour_day = Math.floor(diffDay / (1000*60*60));
    var minutes_day = Math.floor(diffDay / (1000*60) % 60);

    var sleepTime = new Date(this.bedTimeValue);
    var slepTime_ms = sleepTime.getTime();
    var totalStartDay = startDay_ms + slepTime_ms;

    console.log("New date " + startDay);
    console.log("New time " + sleepTime);

    var waketime = new Date(this.wakeUpTimeValue);
    var waketime_ms = waketime.getTime();
    //OvernigthSleepData Array contains start-day-time and end-day-time together

    this.testovernightArray.push(new OvernightSleepData(sleepTime,waketime));
    let currentLength= this.testovernightArray.length;
    console.log("testoverNight " + this.testovernightArray[currentLength-1].dateString());
    this.currentDateLog = this.testovernightArray[currentLength-1].dateString();
    this.currentDateDuration = this.testovernightArray[currentLength-1].summaryString();
    console.log("Duration current " + this.currentDateDuration);



    var diffTime = waketime_ms - slepTime_ms;
    if(diffTime < 0){
      diffTime = 0;
    }
    var hour = Math.floor(diffTime / (1000*60*60));
    var minutes = Math.floor(diffTime / (1000*60) % 60);

    var total_hour = hour_day + hour;
    var total_minutes = minutes_day + minutes;
    console.log("Different Time " + diffTime);
    console.log("Diff " + diffDay);
    let oneDay = "From " + this.formattedString + " to " + this.formattedEndDay 
                 + " \nSleep Duration: " + total_hour + " hour " + total_minutes + " minutes";
    
      
    this.overnightArray.push(oneDay);
    //this.overnightArray.push(this.formattedEndDay);
    
    this.recentOvernight= this.overnightArray[this.overnightArray.length-1]; 
    console.log("length " +  this.overnightArray.length);
  }
  deleteLog(index:number){
    console.log("works " + index);
    var removeArr = this.overnightArray.splice(index,1);
    console.log(" The removed element from the given array is: " + removeArr);
    console.log(this.overnightArray.length);
  }
}

