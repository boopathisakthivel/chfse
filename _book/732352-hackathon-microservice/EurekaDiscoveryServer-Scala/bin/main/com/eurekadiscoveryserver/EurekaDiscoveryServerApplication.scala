package com.eurekadiscoveryserver

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer

@SpringBootApplication
@EnableEurekaServer
class EurekaDiscoveryServerApplication

object Application extends App {
    SpringApplication.run(classOf[EurekaDiscoveryServerApplication]);
}
