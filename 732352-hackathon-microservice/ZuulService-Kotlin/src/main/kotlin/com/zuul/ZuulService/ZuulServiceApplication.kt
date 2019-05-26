package com.zuul.ZuulService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;


@EnableDiscoveryClient
@EnableZuulProxy
@SpringBootApplication
class ZuulServiceApplication

fun main(args: Array<String>) {
    SpringApplication.run(ZuulServiceApplication::class.java, *args)
}