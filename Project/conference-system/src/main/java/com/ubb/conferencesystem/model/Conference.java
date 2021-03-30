package com.ubb.conferencesystem.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Conference {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private LocalDate startTime;
    private LocalDate endTime;

    @OneToMany
    private List<Section> sections = new ArrayList<>();

    public Conference(String name, LocalDate startTime, LocalDate endTime) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Conference(String name, LocalDate startTime, LocalDate endTime, List<Section> sections) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.sections = sections;
    }
}

