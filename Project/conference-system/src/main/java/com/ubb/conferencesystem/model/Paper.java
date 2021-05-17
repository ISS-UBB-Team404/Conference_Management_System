package com.ubb.conferencesystem.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class Paper {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private Boolean accepted;
    private Long authorId;

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
