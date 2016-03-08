/*******************************************************************************
* Copyright (c) 2014 IBM Corporation and other Contributors.
*
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the Eclipse Public License v1.0
* which accompanies this distribution, and is available at
* http://www.eclipse.org/legal/epl-v10.html
*
* Contributors:
* IBM - Initial Contribution
*******************************************************************************/

var RealtimeGraph = function(){

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
	
	// function to invoke Rickshaw and plot the graph
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
		

		this.graph.render();

		this.hoverDetail = new Rickshaw.Graph.HoverDetail( {
			graph: this.graph,
			xFormatter: function(x) {
				return new Date(x * 1000).toString();
			}
		} );

		this.annotator = new Rickshaw.Graph.Annotate( {
			graph: this.graph,
			element: document.getElementById('timeline')
		} );

		this.legend = new Rickshaw.Graph.Legend( {
			graph: this.graph,
			element: document.getElementById('legend')

		} );

		this.shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
			graph: this.graph,
			legend: this.legend
		} );

		this.order = new Rickshaw.Graph.Behavior.Series.Order( {
			graph: this.graph,
			legend: this.legend
		} );

		this.highlighter = new Rickshaw.Graph.Behavior.Series.Highlight( {
			graph: this.graph,
			legend: this.legend
		} );

		this.smoother = new Rickshaw.Graph.Smoother( {
			graph: this.graph,
			element: document.querySelector('#smoother')
		} );

		this.ticksTreatment = 'glow';

		this.xAxis = new Rickshaw.Graph.Axis.Time( {
			graph: this.graph,
			ticksTreatment: this.ticksTreatment,
			timeFixture: new Rickshaw.Fixtures.Time.Local()
		} );

		this.xAxis.render();

		this.yAxis = new Rickshaw.Graph.Axis.Y( {
			graph: this.graph,
			tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
			ticksTreatment: this.ticksTreatment
		} );

		this.yAxis.render();


		this.controls = new RenderControls( {
			element: document.querySelector('form'),
			graph: this.graph
		} );

	}


	this.updateVal = function(data)
	{
		if (document.getElementById('state_') != null)
			document.getElementById('loudness').innerHTML = " Real Time";
		if(document.getElementById('loudness')!= null){
			document.getElementById('loudness').innerHTML = Math.round(data.d['Loudness'] *100) +" %";
		}
		if(document.getElementById('power') != null){
			document.getElementById('power').innerHTML = (data.d['Power']/100).toFixed(2);
		}
		if(document.getElementById('light') != null ){
			document.getElementById('light').innerHTML = Math.round(data.d['Light']*100) +" %";
		}
		if(document.getElementById('motion') != null){ // motion div home or urban
			if(document.getElementById('motion-text') != null){ //urban
				if(data.d['Motion'] == 0){
					document.getElementById('motion').className = "fa fa-male fa-5x";
					document.getElementById('motion-text').innerHTML = "No detected presence";
				} else {
					document.getElementById('motion').className = "fa fa-child fa-5x";
					document.getElementById('motion-text').innerHTML = "Detected presence";
				}
			}else{ //home page
				document.getElementById('motion').innerHTML = data.d['Motion'];
			}
		}
		if(document.getElementById('voltage_b') != null ){ //home page
			document.getElementById('voltage_b').innerHTML = (data.d['v_bat']/1000).toFixed(1);
		}
		if(document.getElementById('charge') != null ){ // 
			if(((((data.d['v_bat']/1000))*100)/28).toFixed(1) > 100.0){
				document.getElementById('charge').innerHTML = 100.0;
			}else if(((((data.d['v_bat']/1000))*100)/28).toFixed(1) < 0.0){
				document.getElementById('charge').innerHTML = 0.0;
			}else{
				document.getElementById('charge').innerHTML = ((((data.d['v_bat']/1000))*100)/28).toFixed(1);
			}
			
			
		}
		if(document.getElementById('charge_perc') != null ){ // 
			if(((((data.d['v_bat']/1000))*100)/28).toFixed(1) > 100.0){
				document.getElementById('charge_perc').innerHTML = 100.0 +" %";
			}else if(((((data.d['v_bat']/1000))*100)/28).toFixed(1) < 0.0){
				document.getElementById('charge_perc').innerHTML = 0.0 +" %";
			}else{
				document.getElementById('charge_perc').innerHTML = ((((data.d['v_bat']/1000))*100)/28).toFixed(1)+" %";
			}
			
			
		}
		if(document.getElementById('efficiency') != null){
			document.getElementById('efficiency').innerHTML = ((data.d['Power']/8)).toFixed(1)+" %";
		}
		if(document.getElementById('charging-img') != null){ //production page
			if(data.d['State']=='0'){ // not charging
				document.getElementById('charging-img').style.display='none';
				document.getElementById('discharging-img').style.display='block';
			}else if(data.d['State']=='2'){ //charging
				//Gif battery charging
				document.getElementById('charging-img').style.display='block';
				document.getElementById('discharging-img').style.display='none';
			}
			if(data.d['bNuit']=='1'){ //  lamp on
				document.getElementById('lamp').innerHTML = "Turned On";
				document.getElementById('panel_light').style.backgroundColor="gold";
			}else if(data.d['bNuit']=='0'){ //lamp off
				document.getElementById('lamp').innerHTML = "Turned Off";
				document.getElementById('panel_light').style.backgroundColor="Gainsboro";
			}
		}
		if(document.getElementById('intensity') != null){
			document.getElementById('intensity').innerHTML = data.d['v_iphoto'];
		}
		if(document.getElementById('voltage') != null){
			document.getElementById('voltage').innerHTML = (data.d['v_vphoto']/1000).toFixed(1);
		}
		/*if(document.getElementById('power_s') != null){
			document.getElementById('power_s').innerHTML = (data.d['Power']/100).toFixed(1);
		}*/
		if(document.getElementById('state_low') != null){ //home page STATE
			if(data.d['State']=='2'){ //charging on state home page
				if(document.getElementById('state_charging') != null){
					document.getElementById('state_charging').checked = true;
				}
			}else if(data.d['State']=='0'){
				if(document.getElementById('state_charging') != null){
					document.getElementById('state_charging').checked = false;
				}
			}
			if (data.d['bNuit']=='0'){ // light on on state home page
				if(document.getElementById('state_light') != null){
					document.getElementById('state_light').checked = false;
				}
			}else if (data.d['bNuit']=='1'){
				if(document.getElementById('state_light') != null){
					document.getElementById('state_light').checked = true;
				}
			}
			if(data.d['v_bat'] <= 22200){
				if(document.getElementById('state_low') != null){
					document.getElementById('state_low').checked = true;
				}
			}else if((data.d['v_bat'] > 28000) && (data.d['v_iphoto'] <= 72)){
				if(document.getElementById('state_full') != null){
					document.getElementById('state_full').checked = true;
				}
			}
			else{
				if(document.getElementById('state_low') != null){
					document.getElementById('state_low').checked = false;
					document.getElementById('state_full').checked = false;
				}
			}
			if(document.getElementById('state_power') != null){
				document.getElementById('state_power').checked = true; //power always true
			}
			
		}
		if(document.getElementById('current_dim') != null){
			document.getElementById('current_dim').innerHTML = data.d['Dim'] +" %";
		}
	}

		    
	this.graphData = function(data)
	{
		if((this.graph != null) && (document.getElementById('charge') == null )){
			var key = 0;
			var seriesData = [];
			var timestamp = Date.now()/1000;
			var maxPoints = 25; 
			for (var j in data.d)
			{
				if (typeof data.d[j] !== 'string') {
					this.graph.series[key].data.push({x:timestamp,y:data.d[j]});
					if (this.graph.series[key].data.length > maxPoints)
					{
						this.graph.series[key].data.splice(0,1);//only display up to maxPoints
					}
					key++;
				}
			}
			this.graph.render();
		}
			
	}
	this.graphDataCharge = function(data)
	{
		if(document.getElementById('charge') != null ){
			var key = 0;
			var seriesData = [];
			var timestamp = Date.now()/1000;
			var maxPoints = 25; 
			for (var j in data.d)
			{
				if (typeof data.d[j] !== 'string') {
					if(j == 'v_bat'){
						this.graph.series[key].data.push({x:timestamp,y:data.d[j]});
						if (this.graph.series[key].data.length > maxPoints)
						{
							this.graph.series[key].data.splice(0,1);//only display up to maxPoints
						}
						key++;
					}
					
				}
			}
			this.graph.render();
		}
			
	}
	this.updateGauge = function(data)
	{
		if(document.getElementById('gauge') != null){
			for (var j in data.d)
			{
				if (typeof data.d[j] !== 'string') {
					if(j == 'Loudness'){
						
						needle.moveTo(data.d[j]);
						break;
					}
				}
			}
		}
		
		
	}
	this.displayChart = function(device,data){
		if( document.getElementById('charge') == null ){

			var key = 0;
			var seriesData = [];
			var timestamp = Date.now()/1000;
			for (var j in data.d)
			{	
				if (typeof data.d[j] !== 'string') {
					seriesData[key]={};
					seriesData[key].name=j;
					seriesData[key].color = palette.color();
					seriesData[key].data=[];

					seriesData[key].data[0]={};
					seriesData[key].data[0].x = timestamp;
					seriesData[key].data[0].y = data.d[j];
					key++;
				}
				
			}

			this.drawGraph(seriesData);
		}
	}
	this.displayChartCharge = function(device,data){
		if(document.getElementById('charge') != null ){

			var key = 0;
			var seriesData = [];
			var timestamp = Date.now()/1000;
			for (var j in data.d)
			{
				if (typeof data.d[j] !== 'string') {
					if(j == 'v_bat'){
						seriesData[key]={};
						seriesData[key].name=j;
						seriesData[key].color = palette.color();
						seriesData[key].data=[];

						seriesData[key].data[0]={};
						seriesData[key].data[0].x = timestamp;
						seriesData[key].data[0].y = (data.d[j]/1000)*3;
						key++;
					}
					
				}
			}

			this.drawGraph(seriesData);
		}
	}

};
