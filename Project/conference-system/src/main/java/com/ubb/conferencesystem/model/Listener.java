package com.ubb.conferencesystem.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@Entity
public class Listener extends User{

    private Integer conferenceId;

    public Listener(String username, String password, String email, Integer conferenceId) {
        super(username, password, email);
        this.conferenceId = conferenceId;
    }
}
