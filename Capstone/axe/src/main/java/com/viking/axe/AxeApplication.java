package com.viking.axe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.viking")
public class AxeApplication {

	public static void main(String[] args) {
		SpringApplication.run(AxeApplication.class, args);
	}

}
