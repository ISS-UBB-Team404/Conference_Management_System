package com.ubb.conferencesystem;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ConferenceSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConferenceSystemApplication.class, args);
	}

	@Bean
    CommandLineRunner commandLineRunner(StudentRepository studentRepository) {
        return args -> {
            Student andrei = new Student("Andrei", "Gabor", "abc@gmail.com", 20);
            studentRepository.save(andrei);
        };
    }
}
