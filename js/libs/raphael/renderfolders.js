define(['raphael'], function(Raphael){
	
	// RENDER FOLDER FUNCTION (BUILDS SVG ICON)
	return function renderFolder(type, color, id, saveFolder){
			// SET UP A FEW VARIABLES
			var paper = null;
		    var i, length, el, start;
		    start = new Date().getTime();
		    $('#'+id).empty();/* Prevents double rendering of folders */
		    switch(type){
				case 1:
		    	paper = Raphael(id, 28, 20);
		    	break;
		    	case 2:
		    	paper = Raphael(id, 28, 20);
		    	break;
		    	case 3:
		    	paper = Raphael(id, 146, 85);
				break;
				case 4:
		    	paper = Raphael(id, 150, 100);
				break;
				case 5:
		    	paper = Raphael(id, 55, 40);
				break;
				case 6:
		    	paper = Raphael(id, 40, 25);
		    	break;
				case 7:
		    	paper = Raphael(id, 40, 25);
		    	break;
				case 8:
		    	paper = Raphael(id, 28, 20);
		    	break;
				case 9:
		    	paper = Raphael(id, 47, 30);
		    	break;
				case 10:
		    	paper = Raphael(id, 82, 45);
		    	break;
			}
		    length = 5000;
		    
		    function sort(progressFn, type, color) {
		        i = 0;
		        this.actionsIndex = 1;
		        this.pathStore = [];
		        var j, value, start;
		        start = new Date().getTime();
		 			// START FOR LOOP
		            for (; i < length; i++) {
		            	// BASED ON TYPE, RETURN THE CORRECT PATHS
			            switch(type) {
			            	case 1:
			            		//SMALL FOLDER PATHS
								1==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 3 5 C 3 2 3 1 3 1 L 10.1 1 L 11.8 3 L 19.4 3 C 21.1 3 22.9 3.3 22.9 5 L 3 5Z"));1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"96-#555555:5-#888888:60",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});2==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 22.9 16 L 3.9 16 L 0.9 7 L 25.9 7 L 22.9 16"));
								2==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});3==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 22.9 15 L 3.9 15 L 0.9 6 L 25.9 6 L 22.9 15"));
								3==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:color,stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});3==this.actionsIndex&&(this.pathStore[this.actionsIndex-1].id='folder_front');
								4==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 4 13.5 L 23 13.5 L 4 13.5"));
								4==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"1","fill-opacity":"0.5","stroke-opacity":".17"});5==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 4 12.5 L 23 12.5 L 4 12.5"));5==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#000","stroke-width":"1","fill-opacity":"0.5","stroke-opacity":".08"});6==this.actionsIndex&&(this.actionsIndex=4999);
			            	break;
			            	case 2:
			            		//GROUP DRAWER PATHS
								1==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 26 18 L 1 18 L 1 10 L 8 10 L 10.1 12 L 17.1 12 L 19 10 L 26 10 L 26 18"));1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});2==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 26 17 L 1 17 L 1 9 L 8 9 L 10.1 11 L 17.1 11 L 19 9 L 26 9 L 26 17"));
								2==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:color,stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});
								2==this.actionsIndex&&(this.pathStore[this.actionsIndex-1].id='folder_front');
								3==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 5.1 1 L 3.1 1 L 1.1 8 L 3.1 8 L 5.1 1"));3==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#a7a9ac",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});4==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 5 1 L 22 1 L 22 2 L 5 2 L 5 1"));
								4==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#a7a9ac",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});5==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 24.1 1 L 22.1 1 L 24.1 8 L 26.1 8 L 24.1 1"));5==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#a7a9ac",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});6==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 6 7 L 21 7 L 21 8 L 6 8 L 6 7"));
								6==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#a7a9ac",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});7==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 6 6 L 10 6 L 10 7 L 6 7 L 6 6"));7==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ee2a7b",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});8==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 6 4 L 21 4 L 21 5 L 6 5 L 6 4"));
								8==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#a7a9ac",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});9==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 6 3 L 10 3 L 10 4 L 6 4 L 6 3"));9==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#49c8f5",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});10==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 1.1 17.8"));
								10==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"1","fill-opacity":"0.2","stroke-opacity":"0.05"});11==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 1 15.5 L 26 15.5 L 1 15.5"));11==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"1","fill-opacity":"0.5","stroke-opacity":".3"});12==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 1 14.5 L 26 14.5 L 1 14.5"));
								12==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#000","stroke-width":"1","fill-opacity":"0.5","stroke-opacity":".05"});13==this.actionsIndex&&(this.actionsIndex=4999);
			            	break;
			            	case 3:
			            	//LARGE FOLDER WITH SHADOW
				            	1==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 133 17.5 L 13 20.6 L 13 14 C 13 14 13 11.9 13 8.6 C 13 5.2 17 1 20 1 C 23.1 1 37.6 1 47.1 1 C 58.6 1 57.2 9 63.4 9 C 69.7 9 126.8 9 126.8 9 C 130.5 9 133 12 133 15.7 L 133 17.5Z"));1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#414042:0-#808285:100","fill-opacity":"1"});1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});
								2==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 135.2 61.6 C 135.2 65.3 132.2 68 128.5 68 L 21.9 68 C 18.2 68 15.2 65.3 15.2 61.6 L 6.3 24.3 C 6.3 20.7 6.3 14 12.9 14 L 137.4 14 C 144.4 14 144.1 20.7 144.1 24.3 L 135.2 61.6Z"));2==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.8","stroke-opacity":"0"});3==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 135.2 62.6 C 135.2 66.3 132.2 69 128.5 69 L 21.9 69 C 18.2 69 15.2 66.3 15.2 62.6 L 6.3 25.3 C 6.3 21.7 6.3 15 12.9 15 L 137.4 15 C 144.4 15 144.1 21.7 144.1 25.3 L 135.2 62.6Z"));
								3==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:color,stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});
								3==this.actionsIndex&&(this.pathStore[this.actionsIndex-1].id='folder_front');4==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 16 62.5 L 135 62.5 L 16 62.5"));4==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"1","fill-opacity":"0.3","stroke-opacity":".16"});5==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 16 61.5 L 135 61.5 L 16 61.5"));
								5==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#000","stroke-width":"1","fill-opacity":".2","stroke-opacity":".08"});6==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 132.6 63.1"));6==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});7==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 16.2 63.1"));
								7==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});8==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 143.4 82 L 7.6 82 L 19.2 70 L 130.8 70 L 143.4 82"));8==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#fff:0-#D2D3D5:66.92-#BCBEC0:99.55","fill-opacity":"1"});
								8==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});9==this.actionsIndex&&(this.actionsIndex=4999);
				           break;
				           //LARGE FOLDER GROUP
				           case 4:
								1==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 147.1 87 L 21.3 87 L 32.6 69 L 134.8 69 L 147.1 87"));1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#FFFFFF:0-#F9FAFA:23.53-#EFEFF0:45.96-#DFE0E1:67.93-#C9CACC:89.49-#BCBEC0:99.55","fill-opacity":"1"});1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});2==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 26 13 C 26 13 26 10.9 26 7.6 C 26 4.2 30 0 33 0 C 36.1 0 50.6 0 60.1 0 C 71.6 0 70.2 8 76.4 8 C 82.7 8 131.8 8 131.8 8 C 135.5 8 138.5 11 138.5 14.7 L 26 13Z"));
								2==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#808285:0.49-#A7A9AC:100","fill-opacity":"1"});2==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});3==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 140.2 62.6 C 140.2 66.3 137.2 69 133.5 69 L 34.9 69 C 31.2 69 28.2 66.3 28.2 62.6 L 19.3 25.3 C 19.3 21.7 19.3 15 25.9 15 L 142.4 15 C 149.4 15 149.1 21.7 149.1 25.3 L 140.2 62.6Z"));
								3==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.2","stroke-opacity":"0"});4==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 140.2 60.6 C 140.2 64.3 137.2 67 133.5 67 L 34.9 67 C 31.2 67 28.2 64.3 28.2 60.6 L 19.3 23.3 C 19.3 19.7 19.3 13 25.9 13 L 142.4 13 C 149.4 13 149.1 19.7 149.1 23.3 L 140.2 60.6Z"));
								4==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.8","stroke-opacity":"0"});5==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 140.2 61.6 C 140.2 65.3 137.2 68 133.5 68 L 34.9 68 C 31.2 68 28.2 65.3 28.2 61.6 L 19.3 24.3 C 19.3 20.7 19.3 14 25.9 14 L 142.4 14 C 149.4 14 149.1 20.7 149.1 24.3 L 140.2 61.6Z"));
								5==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#85AFC3",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});6==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 29 61.5 L 140 61.5 L 29 61.5"));6==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"1","fill-opacity":"0.3","stroke-opacity":"0.1"});7==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 29 60.5 L 140 60.5 L 29 60.5"));
								7==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#000000","stroke-width":"1","fill-opacity":"0.2","stroke-opacity":".04"});8==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 137.6 62.1"));8==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});9==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 29.2 62.1"));
								9==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});10==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M133.1,98L7.3,98L18.6,80L120.8,80L133.1,98"));10==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#FFFFFF:0-#DCDDDE:99.55","fill-opacity":"1"});10==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});
								11==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 128 26.5 L 8 29.6 L 8 23 C 8 23 8 20.9 8 17.6 C 8 14.2 12 10 15 10 C 18.1 10 32.6 10 42.1 10 C 53.6 10 52.2 18 58.4 18 C 64.7 18 121.8 18 121.8 18 C 125.5 18 128 21 128 24.7 L 128 26.5Z"));11==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.5","stroke-opacity":"0"});12==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 127 27.5 L 7 30.6 L 7 24 C 7 24 7 21.9 7 18.6 C 7 15.2 11 11 14 11 C 17.1 11 31.6 11 41.1 11 C 52.6 11 51.2 19 57.4 19 C 63.7 19 120.8 19 120.8 19 C 124.5 19 127 22 127 25.7 L 127 27.5Z"));
								12==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#414042:0-#808285:100","fill-opacity":"1"});12==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});13==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 129.2 71.6 C 129.2 75.3 126.2 78 122.5 78 L 15.9 78 C 12.2 78 9.2 75.3 9.2 71.6 L 0.3 34.3 C 0.3 30.7 0.3 24 6.9 24 L 131.4 24 C 138.4 24 138.1 30.7 138.1 34.3 L 129.2 71.6Z"));
								13==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.5","stroke-opacity":"0"});14==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 129.2 72.6 C 129.2 76.3 126.2 79 122.5 79 L 15.9 79 C 12.2 79 9.2 76.3 9.2 72.6 L 0.3 35.3 C 0.3 31.7 0.3 25 6.9 25 L 131.4 25 C 138.4 25 138.1 31.7 138.1 35.3 L 129.2 72.6Z"));
								14==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:color,stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});
								14==this.actionsIndex&&(this.pathStore[this.actionsIndex-1].id='folder_front');15==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 10 72.5 L 129 72.5 L 10 72.5"));15==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"1","fill-opacity":"0.3","stroke-opacity":".08"});16==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 10 71.5 L 129 71.5 L 10 71.5"));
								16==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#000000","stroke-width":"1","fill-opacity":"0.2","stroke-opacity":"0.1"});17==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 126.6 73.1"));17==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});18==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 10.2 73.1"));
								18==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});19==this.actionsIndex&&(this.actionsIndex=4999);				          	
					        break;
					        //SMALL FOLDER GROUP
					        case 5:
								1==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 51.1 31 L 8.3 31 L 12.2 25 L 46.9 25 L 51.1 31"));1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#FFFFFF:0-#F9FAFA:23.53-#EFEFF0:45.96-#DFE0E1:67.93-#C9CACC:89.49-#BCBEC0:99.55","fill-opacity":"1"});1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});2==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 48 6.3 L 10 7.3 L 10 5.1 C 10 5.1 10 4.3 10 3.2 C 10 2.1 11.6 1 12.6 1 C 13.7 1 18.6 1 21.8 1 C 25.8 1 25.3 3 27.4 3 C 29.5 3 46.2 3 46.2 3 C 47.5 3 48 4.4 48 5.6 L 48 6.3Z"));
								2==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#808285:0.49-#A7A9AC:100","fill-opacity":"1"});2==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});3==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 49.1 22.7 C 49.1 23.9 48 25 46.8 25 L 13.3 25 C 12 25 11 23.9 11 22.7 L 8 9.8 C 8 8.5 8 6 10.2 6 L 49.8 6 C 52.2 6 52.1 8.5 52.1 9.8 L 49.1 22.7Z"));
								3==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.2","stroke-opacity":"0"});4==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 49.1 20.7 C 49.1 21.9 48 23 46.8 23 L 13.3 23 C 12 23 11 21.9 11 20.7 L 8 7.8 C 8 6.5 8 4 10.2 4 L 49.8 4 C 52.2 4 52.1 6.5 52.1 7.8 L 49.1 20.7Z"));
								4==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.8","stroke-opacity":"0"});5==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 49.1 21.7 C 49.1 22.9 48 24 46.8 24 L 13.3 24 C 12 24 11 22.9 11 21.7 L 8 8.8 C 8 7.5 8 5 10.2 5 L 49.8 5 C 52.2 5 52.1 7.5 52.1 8.8 L 49.1 21.7Z"));
								5==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:color,stroke:"none","stroke-width":"0","fill-opacity":".4","stroke-opacity":"0"});6==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 11 22.5 L 49 22.5 L 11 22.5"));6==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"1","fill-opacity":"0.3","stroke-opacity":".2"});7==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 11 21.5 L 49 21.5 L 11 21.5"));
								7==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#000000","stroke-width":"1","fill-opacity":"0.2","stroke-opacity":"0.04"});8==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 48.2 21.7"));8==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});9==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 11.3 21.7"));
								9==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});10==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 45.6 36 L 2.9 36 L 6.7 30 L 41.5 30 L 45.6 36"));10==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#FFFFFF:0-#DCDDDE:99.55","fill-opacity":"1"});
								10==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});11==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 45 10 L 4 11 L 4 8.8 C 4 8.8 4 8.1 4 7 C 4 5.8 5.5 4 6.5 4 C 7.5 4 12.5 4 15.7 4 C 19.6 4 19.1 7 21.3 7 C 23.4 7 42.8 7 42.8 7 C 44.1 7 45 8.1 45 9.4 L 45 10Z"));11==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.5","stroke-opacity":"0"});
								12==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 44 11 L 3 12 L 3 9.8 C 3 9.8 3 9.1 3 8 C 3 6.8 4.5 5 5.5 5 C 6.5 5 11.5 5 14.7 5 C 18.6 5 18.1 8 20.3 8 C 22.4 8 41.8 8 41.8 8 C 43.1 8 44 9.1 44 10.4 L 44 11Z"));12==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#414042:0-#808285:100","fill-opacity":"1"});12==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});
								13==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 44.7 25.6 C 44.7 26.8 43.6 28 42.4 28 L 6.1 28 C 4.9 28 3.9 26.8 3.9 25.6 L 0.8 12.7 C 0.8 11.5 0.8 9 3.1 9 L 45.4 9 C 47.8 9 47.7 11.5 47.7 12.7 L 44.7 25.6Z"));13==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.5","stroke-opacity":"0"});14==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 44.7 26.6 C 44.7 27.8 43.6 29 42.4 29 L 6.1 29 C 4.9 29 3.9 27.8 3.9 26.6 L 0.8 13.7 C 0.8 12.5 0.8 10 3.1 10 L 45.4 10 C 47.8 10 47.7 12.5 47.7 13.7 L 44.7 26.6Z"));
								14==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:color,stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});
								14==this.actionsIndex&&(this.pathStore[this.actionsIndex-1].id='folder_front');15==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 4 26.5 L 44 26.5 L 4 26.5"));15==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"1","fill-opacity":"0.3","stroke-opacity":"0.1"});16==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 4 25.5 L 44 25.5 L 4 25.5"));
								16==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#000000","stroke-width":"1","fill-opacity":"0.2","stroke-opacity":"0.08"});17==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 43.8 26.5"));17==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});18==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 4.2 26.5"));
								18==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});19==this.actionsIndex&&(this.actionsIndex=4999);
					        break;
					        case 6:
					        //DRAG FOLDER
								1==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 32 10 L 35 10 L 35 22.4 C 35 23.5 33.8 24 32.8 24 L 7 24 L 7 22"));1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});2==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 32 9.5 L 35.5 9.5 L 35.5 22.4 C 35.5 23.5 33.8 24.5 32.8 24.5 L 6.5 24.5 L 6.5 22"));
								2==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#c7c8ca","stroke-width":"1","fill-opacity":"1","stroke-opacity":"1"});3==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 32 8 L 33 8 L 33 20.4 C 33 21.5 31.8 22 30.8 22 L 4 22 L 4 20"));3==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});
								4==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 32 7.5 L 33.5 7.5 L 33.5 20.4 C 33.5 21.5 31.8 22.5 30.8 22.5 L 4.5 22.5 L 4.5 20"));4==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#b1b3b6","stroke-width":"1","fill-opacity":"1","stroke-opacity":"1"});5==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 32 6.7 L 31.4 6.7 L 1 7.5 L 1 5.7 C 1 5.7 2.1 5 2.1 4.1 C 2.1 3.2 3.4 1 4.2 1 C 5.1 1 9.2 1 11.8 1 C 15.1 1 14.7 4 16.4 4 C 18.2 4 30.3 4 30.3 4 C 31.4 4 32 5.1 32 6.1 L 32 6.7Z"));
								5==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#414042:0-#808285:100","fill-opacity":"1"});5==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});6==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 32 17.4 C 32 18.5 30.8 19 29.8 19 L 3.8 19 C 2.7 19 1 18.5 1 17.4 L 1 8.9 L 1 6 L 32 6 L 32 17.4Z"));
								6==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.8","stroke-opacity":"0"});7==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 32 18.4 C 32 19.5 30.8 20 29.8 20 L 3.8 20 C 2.7 20 1 19.5 1 18.4 L 1 9.9 L 1 7 L 32 7 L 32 18.4Z"));
								7==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:color,stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});7==this.actionsIndex&&(this.pathStore[this.actionsIndex-1].id='folder_front');
								8==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 1 17.5 L 32 17.5 L 1 17.5"));8==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"1","fill-opacity":"0.3","stroke-opacity":".12"});9==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 1 16.5 L 32 16.5 L 1 16.5"));9==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#000000","stroke-width":"1","fill-opacity":"0.2","stroke-opacity":".08"});
								10==this.actionsIndex&&(this.actionsIndex=4999);
							break;
							//MEDIUM FOLDER
							case 7:
								1==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 33 6.6 L 3 7.5 L 3 5.7 C 3 5.7 3 5.1 3 4.1 C 3 3.2 3.8 1 4.6 1 C 5.5 1 9.6 1 12.2 1 C 15.5 1 15.1 4 16.8 4 C 18.6 4 30.7 4 30.7 4 C 31.8 4 33 5.1 33 6.1 L 33 6.6Z"));1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"450-#414042:0-#808285:100","fill-opacity":"1"});1==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({stroke:"none","stroke-width":"0","stroke-opacity":"0"});
								2==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 33.1 17.3 C 33.1 18.3 32.2 19 31.2 19 L 5.2 19 C 4.1 19 3.3 18.3 3.3 17.3 L 0.8 8.8 C 0.8 7.8 0.8 6 2.6 6 L 33.7 6 C 35.7 6 35.6 7.8 35.6 8.8 L 33.1 17.3Z"));2==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"#ffffff",stroke:"none","stroke-width":"0","fill-opacity":"0.8","stroke-opacity":"0"});3==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 33.1 18.3 C 33.1 19.3 32.2 20 31.2 20 L 5.2 20 C 4.1 20 3.3 19.3 3.3 18.3 L 0.8 9.8 C 0.8 8.8 0.8 7 2.6 7 L 33.7 7 C 35.7 7 35.6 8.8 35.6 9.8 L 33.1 18.3Z"));
								3==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:color,stroke:"none","stroke-width":"0","fill-opacity":"1","stroke-opacity":"0"});
								3==this.actionsIndex&&(this.pathStore[this.actionsIndex-1].id='folder_front');4==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 4 17.5 L 33 17.5 L 4 17.5"));4==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"1","fill-opacity":"0.3","stroke-opacity":".1"});5==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 4 16.5 L 33 16.5 L 4 16.5"));
								5==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#000000","stroke-width":"1","fill-opacity":"0.2","stroke-opacity":"0.08"});6==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 32.3 18.5"));6==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});7==this.actionsIndex&&(this.pathStore[this.actionsIndex-1]=paper.path("M 3.5 18.5"));
								7==this.actionsIndex&&this.pathStore[this.actionsIndex-1].attr({fill:"none",stroke:"#ffffff","stroke-width":"3.95","fill-opacity":"0.2","stroke-opacity":"0.2"});8==this.actionsIndex&&(this.actionsIndex=4999);
							break;
							case 8:
								1 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 24 6 L 25 6 L 25 16.6 C 25 17.7 23.7 19 22.7 19 L 6 19 L 6 17"));
								1 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({fill:"#ffffff", stroke:"none", "stroke-width":"0", "fill-opacity":"1", "stroke-opacity":"0"});
								2 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 24 6.5 L 25.5 6.5 L 25.5 16.6 C 25.5 17.7 23.7 18.5 22.7 18.5 L 5.5 18.5 L 5.5 17"));
								2 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({fill:"none", stroke:"#c7c8ca", "stroke-width":"1", "fill-opacity":"1", "stroke-opacity":"1"});
								3 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 22 4 L 23 4 L 23 14.6 C 23 15.7 21.7 17 20.7 17 L 3 17 L 3 15"));
								3 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({fill:"#ffffff", stroke:"none", "stroke-width":"0", "fill-opacity":"1", "stroke-opacity":"0"});
								4 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 22 4.5 L 23.5 4.5 L 23.5 14.6 C 23.5 15.7 21.7 16.5 20.7 16.5 L 3.5 16.5 L 3.5 15"));
								4 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({fill:"none", stroke:"#b1b3b6", "stroke-width":"1", "fill-opacity":"1", "stroke-opacity":"1"});
								5 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 22 12.6 C 22 13.7 20.7 15 19.7 15 L 3.7 15 C 2.6 15 1 13.7 1 12.6 L 1 9.1 L 1 6 L 22 6 L 22 12.6Z"));
								5 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({fill:color, stroke:"none", "stroke-width":"0", "fill-opacity":"1", "stroke-opacity":"0"});
								5==this.actionsIndex&&(this.pathStore[this.actionsIndex-1].id='folder_front');
								6 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 1 11 L 22 11 L 1 11"));
								6 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({fill:"none", stroke:"#000000", "stroke-width":"1", "fill-opacity":"0.2", "stroke-opacity":".08"});
								7 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 1 12 L 22 12 L 1 12"));
								7 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({fill:"none", stroke:"#ffffff", "stroke-width":"1", "fill-opacity":"0.2", "stroke-opacity":".14"});
								8 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 22 5 L 1 5 C 1 5 1 3.4 1 2.6 C 1 1.9 1.7 1 2.4 1 C 3.1 1 6.4 1 8.6 1 C 11.2 1 10.8 3 12.3 3 C 13.7 3 20.2 3 20.2 3 C 21 3 22 3.4 22 4.2 L 22 5Z"));
								8 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({fill:"450-#939598:0-#BCBEC0:100", "fill-opacity":"1"});
								8 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({stroke:"none", "stroke-width":"0", "stroke-opacity":"0"});
								8 == this.actionsIndex && (this.actionsIndex = 4999);
	 						break;
	 						case 9:
	 							1 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 43 7.5 L 3 8.5 L 3 5 C 3 5 3 4.3 3 3.2 C 3 2.1 4.7 0.9 5.7 0.9 C 6.7 0.9 11.6 0.9 14.7 0.9 C 18.5 0.9 18 2.9 20.1 2.9 C 22.2 2.9 41.1 2.9 41.1 2.9 C 42.3 2.9 43 4.3 43 5.5 L 43 7.5Z"));
								1 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': '450-#404041:0-#808184:100','fill-opacity': '1','stroke': 'none','stroke-width': '0','stroke-opacity': '0'});
								2 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 43.8 21.6 C 43.8 22.8 42.9 23.9 41.6 23.9 L 6.3 23.9 C 5.1 23.9 4.1 22.8 4.1 21.6 L 1.2 9.3 C 1.2 8.1 1.2 5.9 3.4 5.9 L 44.6 5.9 C 46.9 5.9 46.8 8.1 46.8 9.3 L 43.8 21.6Z"));
								2 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': '#ffffff','stroke': 'none','stroke-width': '0','fill-opacity': '0','stroke-opacity': '0'});
								3 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 43.8 22.6 C 43.8 23.8 42.9 24.9 41.6 24.9 L 6.3 24.9 C 5.1 24.9 4.1 23.8 4.1 22.6 L 1.2 10.3 C 1.2 9.1 1.2 6.9 3.4 6.9 L 44.6 6.9 C 46.9 6.9 46.8 9.1 46.8 10.3 L 43.8 22.6Z"));
								3 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': color,'stroke': 'none','stroke-width': '0','fill-opacity': '1','stroke-opacity': '0'});
								3 == this.actionsIndex && (this.pathStore[this.actionsIndex-1].id='folder_front');
								
								4 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 4 21.4 L 44 21.4 L 4 21.4"));
								4 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': 'none','stroke': '#ffffff','stroke-width': '1','fill-opacity': '0','stroke-opacity': '.15'});
								
								5 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 4 20.4 L 44 20.4 L 4 20.4"));
								5 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': 'none','stroke': '#929497','stroke-width': '1','fill-opacity': '0','stroke-opacity': '.15'});
								
								6 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 43 22.5"));
								6 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': 'none','stroke': '#ffffff','stroke-width': '0','fill-opacity': '0','stroke-opacity': '0'});
								7 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 4.5 22.5"));
								7 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': 'none','stroke': '#ffffff','stroke-width': '0','fill-opacity': '0','stroke-opacity': '0'});
								8 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 46.9 28.9 L 1.9 28.9 L 5.8 24.9 L 42.7 24.9 L 46.9 28.9"));
								8 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': '450-#FFFFFF:0-#CDCED0:74.84-#BBBDBF:99.55','fill-opacity': '1','stroke': 'none','stroke-width': '0','stroke-opacity': '0'});
								8 == this.actionsIndex && (this.actionsIndex = 4999);
							break;
							case 10:
								1 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 74.1 11.3 L 6.3 13 L 6.3 9.3 C 6.3 9.3 6.3 8.2 6.3 6.3 C 6.3 4.4 8.6 2.2 10.3 2.2 C 12 2.2 20.2 2.2 25.5 2.2 C 32 2.2 31.2 6.5 34.7 6.5 C 38.2 6.5 70.4 6.5 70.4 6.5 C 72.5 6.5 74.1 8.2 74.1 10.3 L 74.1 11.3Z"));
								1 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': '450-#404041:0-#808184:100','fill-opacity': '1','stroke': 'none','stroke-width': '0','stroke-opacity': '0'});
								
								2 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 75.1 36.3 C 75.1 38.4 73.4 40.2 71.3 40.2 L 11.4 40.2 C 9.3 40.2 7.6 38.4 7.6 36.3 L 2.6 15.2 C 2.6 13.1 2.6 9.2 6.3 9.2 L 76.4 9.2 C 80.3 9.2 80.1 13.1 80.1 15.2 L 75.1 36.3Z"));
								2 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': '#ffffff','stroke': 'none','stroke-width': '0','fill-opacity': '0','stroke-opacity': '0'});
								
								3 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 75.1 36.6 C 75.1 38.7 73.4 40.2 71.3 40.2 L 11.4 40.2 C 9.3 40.2 7.6 38.7 7.6 36.6 L 2.6 15.8 C 2.6 13.8 2.6 10.2 6.3 10.2 L 76.4 10.2 C 80.3 10.2 80.1 13.8 80.1 15.8 L 75.1 36.6Z"));
								3 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': color,'stroke': 'none','stroke-width': '0','fill-opacity': '1','stroke-opacity': '0'});
								3 == this.actionsIndex && (this.pathStore[this.actionsIndex-1].id='folder_front');
								
								4 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 8 36.7 L 75 36.7 L 8 36.7"));
								4 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': 'none','stroke': '#ffffff','stroke-width': '1','fill-opacity': '0','stroke-opacity': '.15'});
								
								5 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 8 35.7 L 75 35.7 L 8 35.7"));
								5 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': 'none','stroke': '#929497','stroke-width': '1','fill-opacity': '0','stroke-opacity': '.15'});
								
								6 == this.actionsIndex && (this.pathStore[this.actionsIndex - 1] = paper.path("M 80.3 47.2 L 3.9 47.2 L 10.4 40.2 L 73.2 40.2 L 80.3 47.2"));
								6 == this.actionsIndex && this.pathStore[this.actionsIndex - 1].attr({'fill': '450-#FFFFFF:0-#CDCED0:74.84-#BBBDBF:99.55','fill-opacity': '1','stroke': 'none','stroke-width': '0','stroke-opacity': '0'});
								6 == this.actionsIndex && (this.actionsIndex = 4999);
							break;
				        }	
						this.actionsIndex++;
		            	if (new Date().getTime() - start > 40) {i++;setTimeout(arguments.callee, 0);break;}
		            }// END OF FOR LOOP
		    }// END OF SORT FUNCTION
		    start = new Date().getTime();
		    sort(function (value, total) {progressbar = paper.rect(0, 16, 0, 6, 3).attr({fill: '#0000FF'});}, type, color);
		    if(saveFolder) {//Store the folder in the containers data object for later manipulation
		    	$('#'+id).data('folder', paper);
		    }
	};
});

