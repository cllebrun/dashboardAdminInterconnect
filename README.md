Deploy a Real-time IoT dashboard application (Node.js app) on Bluemix.
====================================

1. Connect to Bluemix:
    https://console.ng.bluemix.net
    
2. Create a new Javascript web app on Bluemix:
- On the dashboard, click on "Create App"
- Choose  "Web" app
- Choose the "SDK for Node.js" runtime
- Click "Continue"
- Give your application a name (it has to be unique)
- Wait for your application to be started
3. Download the project from Git:
- Browse https://github.com/cllebrun/dashboardAdminInsight
- Click on "Download ZIP" on the right of the page
- Unzip the folder
- Open the folder and the "manifest.yml" file and edit it to change the name and the host with the name you gave to the application you created on Bluemix.
4. Push the app to Bluemix
- Open the Command prompt and locate to the project folder you have just unzipped. (with cd command)
- Connect to Bluemix using command line:

    cf api https://api.ng.bluemix.net

- Log into Bluemix using command line:

    cf login 

- Deploy your app to Bluemix:

    cf push

- Wait for your app to be started
- Access your app: <your-bluemix-application-name.mybluemix>.net

    Visualize the data from the Urban Light data on your real-time dashbord app !


 


==================
How to customize the app:

#### Realtime data: 

   The components for the realtime data visualization are placed in the files realtime.js and realtimeGraph.js in this folder.

        public\js\realtime\
    
        \realtime.js
    
        \realtimeGraph.js

*realtimeGraph.js*: This file contains the graph and it's related functions.This is written in the same style as historianGraph.js above.So you can follow the guidelines for historianGraph.js to customize the code.

*realtime.js* : This file intializes the graph and subscribes to the mqtt topics to get realtime device data from IBM IOT cloud.


 *Change the color of the graph*: In the below section of code you can change the hexadecimal codes to change the color of the graph data.
    
        var palette = new Rickshaw.Color.Palette( { scheme: [
                "#7f1c7d",
                "#00b2ef",
                "#00649d",
                "#00a6a0",
                "#ee3e96",
                "#FF6600",
                "#33CC33",
                "#996633",
                "#00FFFF",
                "#FFFF00",
                "#999966",
                "#003300",
                "#CC0000",
                "#993333",
                "#009933"

            ] } );

 This instantiates the graph and set the intial renderer to line.

        
          this.drawGraph = function(seriesData)
          {
            // instantiate our graph!
            this.palette = palette;
            if(document.getElementById("chart") != null){
              this.graph = new Rickshaw.Graph( {
                element: document.getElementById("chart"),
                width: 600,
                height: 250,
                renderer: 'line',
                stroke: true,
                preserve: true,
                series: seriesData  
              } );
            }else{
              return null;
            }
          }

