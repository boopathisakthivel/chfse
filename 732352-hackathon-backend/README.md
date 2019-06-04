# Spring Boot, Spring MVC with MongoDB Integration, 

## Running Procedure
	* Run EurekaDiscoveryServer, ZuulService and SkillsTechnologies in the order
	
	* http://localhost:9090/hackFsePortal/sampleMetricsService/skillstech/hello 
	
	* cd /Users/Softwares/mongodb-osx-x86_64-4.0.8/bin
	* sudo -s
	* ./mongod -> Mongodb runs on port 27017
	
	* Run 732352-hackathon-backend project
	* http://localhost:9090/hackFsePortal/hackFseMetricsService/genericMetric/uniqueVolunteeringDetails
	* http://localhost:9090/hackFsePortal/hackFseMetricsService/genericMetric/volunteeringEffort
	

	
## MongoDB Sample Queries
	* show dbs -> List all database Name's 
	* use databaseName -> Switch to particular database
	* show collections; -> Show Tables

	* db.<collectionName>.find();
	* db.fileModificationdetails.find();

	* db.<collection_name>.drop() -> db.fileModificationdetails.drop()

	* db.eventInformation.update({'employeeId':287469},{$set:{'employeeName':'Rock'}},{multi:true});
	* db.eventInformation.update({'eventDate':'01-12-18'},{$set:{'eventDate':'01-05-18'}},{multi:true});
	* db.eventInformation.update({'baseLocation':'Chennai'},{$set:{'employeeId':287469}},{multi:true});


## Jenkins Setup
	* Install Jenkins
	* http://localhost:8080/
	
## Docker Setup
	* Reference https://www.robasworld.com/spring-boot-with-docker/
	* Install Docker
	* Check Docker Version : docker --version
	
	* Create Dockerfile in 732352-hackathon-backend project
	* Go to 732352-hackathon-backend folder
	
	* Build Image -> docker build -t spring-docker .
	* Run Image -> Docker run –p 8080:8080 spring-docker
	
## Spring Boot Test
	- https://moelholm.com/2016/10/22/spring-boot-separating-tests/

	- https://spring.io/guides/gs/testing-web/

	- https://www.tutorialspoint.com/spring_boot/spring_boot_rest_controller_unit_test.htm

	- https://spring.io/blog/2016/04/15/testing-improvements-in-spring-boot-1-4

	- https://www.baeldung.com/spring-boot-testing 
	
## Gradle Plugins

	- https://www.mkyong.com/gradle/gradle-display-test-results-in-console/