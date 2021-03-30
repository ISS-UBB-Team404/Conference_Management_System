package com.ubb.conferencesystem.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@DiscriminatorValue("paper")
public class Paper {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String title;
    private String content;
    private Boolean accepted;

    public Paper(String title, String content, Boolean accepted) {
        this.title = title;
        this.content = content;
        this.accepted = accepted;
    }

    public Paper(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
