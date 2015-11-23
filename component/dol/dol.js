angular.module("exam").controller("dolController",['$scope','$http','dolService',function($scope,$http,dolService){
	self = this;
	self.total = 0;
	self.RECORDS=[];

	var yesterday = moment().add(-1, 'days').format("MM/DD/YYYY");

	self.startDateFrom = yesterday;
	self.startDateTo = self.startDateFrom
	self.loading = false;
	self.countries = [

						{
							name:"alabama",
							id:1

						},
						{
							name:"alaska",
							id:2
						},
						{
							name:"arizona",
							id:3
						},
						{
							name:"arkansas",
							id:4
						},
						{
							name:"california",
							id:5
						},
						{
							name:"colorado",
							id:6
						},
						{
							name:"connecticut",
							id:7
						},
						{
							name:"delaware",
							id:8
						},
						{
							name:"district of columbia",
							id:9
						},
						{
							name:"florida",
							id:10
						},
						{
							name:"georgia",
							id:11
						},
						{
							name:"guam",
							id:12
						},
						{
							name:"hawaii",
							id:13
						},
						{
							name:"idaho",
							id:14
						},
						{
							name:"illinois",
							id:15
						},
						{
							name:"indiana",
							id:16
						},
						{
							name:"iowa",
							id:17
						},
						{
							name:"kansas",
							id:18
						},
						{
							name:"kentucky",
							id:19
						},

						{	name:"louisiana",
							id:20
						},

						{	name:"maine",
							id:21
						},

						{	name:"maryland",
							id:22
						},

						{	name:"massachusetts",
							id:23
						},

						{	name:"michigan",
							id:24
						},

						{	name:"minnesota",
							id:25
						},

						{	name:"mississippi",
							id:26
						},

						{	name:"missouri",
							id:27
						},

						{	name:"montana",
							id:28
						},

						{	name:"nebraska",
							id:29
						},

						{	name:"nevada",
							id:30	
						},

						{	name:"new hampshire",
							id:31
						},

						{	name:"new jersey",
							id:32
						},

						{	name:"new mexico",
							id:33
						},

						{	name:"new york",
							id:34
						},

						{	name:"north carolina",
							id:35
						},

						{	name:"north dakota",
							id:36
						},

						{	name:"northern mariana islands",
							id:58
						},

						{	name:"ohio",
							id:37
						},

						{	name:"oklahoma",
							id:38
						},

						{	name:"oregon",
							id:39
						},

						{	name:"pennsylvania",
							id:40
						},

						{	name:"puerto rico",
							id:41
						},

						{	name:"rhode island",
							id:42
						},

						{	name:"south carolina",
							id:43
						},
						{	name:"south dakota",
							id:44
						},
						{	name:"tennessee",
							id:45
						},
						{	name:"texas",
							id:46
						},
						{	name:"utah",
							id:47
						},
						{	name:"vermont",
							id:48
						},
						{	name:"virgin islands",
							id:49
						},
						{	name:"virginia",
							id:50
						},
						{	name:"washington",
							id:51
						},
						{	name:"west virginia",
							id:52
						},
						{	name:"wisconsin",
							id:53
						},
						{	name:"wyoming",
							id:54
						}
				] ;
  
  	var getDOL = function(country){
  		dolService.getData('https://icert.doleta.gov/index.cfm?event=ehLCJRExternal.dspQuickCertSearchGridData&&startSearch=1&case_number=&employer_business_name=&visa_class_id=6&state_id='+country.id+'&location_range=10&location_zipcode=&job_title=&naic_code=&create_date=undefined&post_end_date=undefined&h1b_data_series=ALL&start_date_from='+self.startDateFrom+'&start_date_to='+self.startDateTo+'&end_date_from=mm/dd/yyyy&end_date_to=mm/dd/yyyy&nd=1448199566662&page=1&rows=1000&sidx=create_date&sord=desc&nd=1448199566664&_search=false').then(function(result){			
			self.data=result.ROWS
			self.record={
					"caseData":self.data,
					"country":country
				}
			
			self.RECORDS.push(self.record)
			self.total+=result.ROWS.length

			if(country.id==54){
	  			self.loading = false  			
  			}
		})
  	}
  	
  	
  	self.searchDol = function(){
  		self.loading = true;
  		self.RECORDS = [];

  		self.countries.forEach(function(country,index){
  			getDOL(country)
 		
  		})
  	}

  //	self.searchDol()

	
}])