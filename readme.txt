--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

*/20
- 3/3 The ability to log overnight sleep
- */3 The ability to log sleepiness during the day
- */3 The ability to view these two categories of logged data
- */3 Either using a native device resource or backing up logged data
- */3 Following good principles of mobile design
- */3 Creating a compelling app
- */2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?

    Our group spent almost 60 hours to complete this assignment.

3. What online resources did you consult when completing this assignment? (list specific URLs)

    https://stackoverflow.com/questions/39503876/how-to-get-the-value-from-ion-select-option
    https://www.youtube.com/watch?v=iq_XIPml9_M
    https://forum.ionicframework.com/t/datetime-in-ionic/66025
    https://www.tutorialsteacher.com/typescript/typescript-if-else
    https://www.9lessons.info/2019/11/ionic-angular-update-delete-rxjs.html
    https://ionicframework.com/docs/api/card
    https://ionic.io/blog/5-examples-of-the-new-ionic-6-bottom-sheet-modal
    https://date-fns.org/docs/format
    https://javascript.plainenglish.io/ionic-5-charts-graphs-using-chartjs-library-5ce69b83b2a9
    https://ionicframework.com/docs/api/nav
    https://www.chartjs.org/docs/latest/getting-started/usage.html
    https://enappd.com/blog/charts-in-ionic-4-apps-and-pwa-part-1/52/
    https://www.freecodecamp.org/news/how-to-make-bar-and-line-charts-using-chartjs-in-angular/
    https://masteringionic.com/blog/adding-charts-to-an-ionic-project
    https://www.chartjs.org/docs/latest/charts/bar.html
    https://www.freecodecamp.org/news/how-to-make-bar-and-line-charts-using-chartjs-in-angular/
    https://www.youtube.com/watch?v=vCfAe2esboU&t=423s


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

    Our group did this assignment by ourselves. Most time we searched from google and watch record video from lectures.

5. Is there anything special we need to know in order to run your code?

    No.

--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?

    We did not design our app for a particular type of user. We design this sleep tracker contains simple features;therefore,
    this app design normal users.

7. Did you design your app specifically for iOS or Android, or both?

    We designed sleep tracker for web.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?

    People can choose only time to log their sleep or they can choose specific day and time to log their sleep.
    There are four categories, which are start day, bed time, end day, wake up time. Thus, users can have more options to 
    log their sleep flexiably.

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
    There are seven sleepiness, and users can choose one of them to write comment with specific day. 
    After choosing sleepniess and comment, users can save it, and it will appear in the history page.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?

    We used modal to create a history page for log overnight sleep and sleepniss because users can see all information
    from one page. Also, people can delete their logged data from history page.



11. Which feature choose--using a native device resource, backing up logged data, or both?

    We chose to use ionic storage to store our data in local server.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?



13. If you backed up logged data, where does it back up to?


14. How does your app implement or follow principles of good mobile design?

    We created error prevention for deleting. When users want to delete their history of logged data, 
    the app will comfirm their action to avoid mistake. Also, we followed basic logic for choosing date and time.
    When users choose start day or bed time, the end day or wake up time will not appear before start day and bed time.