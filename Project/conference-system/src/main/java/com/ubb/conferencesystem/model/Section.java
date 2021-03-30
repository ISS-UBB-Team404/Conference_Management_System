package com.ubb.conferencesystem.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class Section {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer numberOfParticipants;
    private String name;
    private LocalDate startTime;
    private LocalDate endTime;
}
