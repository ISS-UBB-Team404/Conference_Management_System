package com.ubb.conferencesystem;

import com.ubb.conferencesystem.model.Author;
import com.ubb.conferencesystem.model.Paper;
import com.ubb.conferencesystem.model.Proposal;
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
    CommandLineRunner commandLineRunner(Repo repo) {
        return args -> {
            Paper paper1 = new Paper("title1", "content1", true);
            Paper paper2 = new Paper("title2", "content2");
//            Proposal prop1 = new Proposal("titlep1", "contentp1", new Author("auth", "qwe", "asd@gmail.com"));
            repo.save(paper1);
            repo.save(paper2);
//            repo.save(prop1);

        };
    }
}
