package com.ubb.conferencesystem.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@Entity
public class Chair extends User{
    private Integer conferenceId;

    public Chair(String username, String password, String email, Integer conferenceId) {
        super(username, password, email);
        this.conferenceId = conferenceId;
    }
}
