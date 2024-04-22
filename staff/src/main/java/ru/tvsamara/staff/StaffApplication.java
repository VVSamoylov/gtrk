package ru.tvsamara.staff;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import ru.tvsamara.staff.Configuration.FileStorageProperties;
@ComponentScan("ru.tvsamara.staff")
@EnableConfigurationProperties({FileStorageProperties.class})
@SpringBootApplication
public class StaffApplication {

	public static void main(String[] args) {
		SpringApplication.run(StaffApplication.class, args);
	}

}
