# Cycling Competition Application
##University project for Hybrid Application Development.

>Each year in Belgium there is an indoor cycling competition (www.z6sdaagse.be ). The cyclers are cycling during 6 days. The competition starts on the 19th of November and ends at Sunday 24th November.

>The organisation wants an app which gives  the spectators the opportunity  to follow the competition on their smartphone. 

###How to run on your local machine


1. ```git clone https://github.com/tsvetan-ganev/cycling-competition-ionic.git```

2. ```cd cycling-competition-ionic```

3. ```npm install``` to install the dependencies (**gulp** and **sass**) .

4. If you don't have Cordova or/and Ionic ```sudo npm install -g cordova ionic```.

5. ```ionic state restore``` to install the required **ionic** plugins and platforms.

6. ```ionic serve --watch --lab``` starts the application in the browser. 
The SASS files should be compiled but if they aren't you can do that manually:
```gulp sass```.

7. ```ionic run android``` or ```ionic run ios``` runs the application on a device.
